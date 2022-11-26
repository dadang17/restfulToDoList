import users from "../models/user.models.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ message: "Password Tidak cocok" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ message: "register berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await users.findOne({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ message: "Password salah" });
    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const accesToken = Jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "300s",
      }
    );

    const refreshToken = Jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true,
    });

    res.cookie("userID", userId);

    res.json({ accesToken });
  } catch (error) {
    res.status(404).json({ message: "Email tidak ditemukan" });
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(204);
  const user = await users.findOne({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user) return res.sendStatus(204);
  const userId = user.id;
  await users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  res.clearCookie("userID");
  return res.sendStatus(200);
};
