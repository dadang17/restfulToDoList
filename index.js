const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const todoRoute = require("./routes/todo.route");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(userRoute);
app.use(todoRoute);
app.use(authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
