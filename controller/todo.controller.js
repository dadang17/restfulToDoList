import todolist from "../models/todo.models.js";

export const getToDO = async (req, res) => {
  try {
    const response = await todolist.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getToDobyId = async (req, res) => {
  try {
    const response = await todolist.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createToDO = async (req, res) => {
  const user_id = req.cookies.userID;
  const { title, description } = req.body;

  try {
    await todolist.create({
      title: title,
      description: description,
      userid: user_id,
    });

    res.status(201).json({ message: "Todo Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateToDo = async (req, res) => {
  try {
    await todolist.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Todo Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteToDo = async (req, res) => {
  try {
    await todolist.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Todo Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
