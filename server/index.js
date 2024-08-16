const express = require("express");
const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
const todoModel = require("./models/Todo");
// mongoose.connect(process.env.MONGO_URL);
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

app.post("/add", (req, res) => {
  const task = req.body.task;
  // todoModel.find({ task: task }).then(console.log("task already existed"));
  todoModel
    .create({
      task: task,
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

let val = false;

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  if (val === true) {
    val = false;
  } else {
    val = true;
  }
  todoModel
    .findByIdAndUpdate({ _id: id }, { done: !val })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
