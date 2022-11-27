const models = require("./../models/index");

function getToDO(req, res) {
  models.Todolists.findAll().then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(200).json(todolist);
    }
  });
}

function getToDobyId(req, res) {
  models.Todolists.findOne({
    where: {
      id: req.params.id,
    },
  }).then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(200).json(todolist);
    }
  });
}
function createToDO(req, res) {
  const user_id = req.cookies.userID;
  const { title, description } = req.body;

  models.Todolists.create({
    title: title,
    description: description,
    userid: user_id,
  }).then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(201).json({ message: "Todo Created" });
    }
  });
}
function updateToDo(req, res) {
  models.Todolists.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(201).json({ message: "Todo Update" });
    }
  });
}
function deleteToDo(req, res) {
  models.Todolists.destroy({
    where: {
      id: req.params.id,
    },
  }).then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(201).json({ message: "Todo Deleted" });
    }
  });
}

function getToDObyUser(req, res) {
  // const user_id = req.cookies.userID;
  models.Todolists.findAll({
    where: {
      userid: req.cookies.userID,
    },
  }).then((todolist) => {
    if (!todolist) {
      console.log(error.message);
    } else {
      res.status(200).json(todolist);
    }
  });
}

module.exports = {
  createToDO: createToDO,
  getToDO: getToDO,
  getToDobyId: getToDobyId,
  updateToDo: updateToDo,
  deleteToDo: deleteToDo,
  getToDObyUser: getToDObyUser,
};
