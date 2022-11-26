import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import todoRoute from "./routes/todo.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(cookieParser());

// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//   })
// );

// app.use(
//   session({
//     secret: process.env.session_secret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: "auto",
//     },
//   })
// );

app.use(express.json());
app.use(userRoute);
app.use(todoRoute);
app.use(authRoute);

try {
  await db.authenticate();
  console.log("Database Connected");
  // await todolist.sync();
} catch (error) {
  console.error(error);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
