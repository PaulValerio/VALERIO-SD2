// Import the installed module of express
const express = require("express");
// Import mongoose module
const mongoose = require("mongoose");
// Provide name for the server
const server = express();
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
mongoose.connect(
  "mongodb+srv://admin:admin123@sd2-valerio.dcjgp5j.mongodb.net/task-management=SD2-VALERIO",
);

let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.log("Can't connect to MongoDB"));

// Check if connection is okay
db.once("open", () => console.log("MongoDB Atlas connection success"));

// Schema -> Blueprint
const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
});

// Model
const Task = mongoose.model("Task", taskSchema);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/home", (req, res) => {
  res.send("Hello from the home endpoint");
});

server.get("/error", (req, res) => {
  res.status(404).send({
    code: 404,
    message: "Sorry the page is not found.",
  });
});

server.post("/tasks/add", (req, res) => {
  Task.findOne({ name: req.body.name, description: req.body.description }).then(
    (result, err) => {
      if (result != null && result.name == req.body.name) {
        res.send("Duplicate found. This task cannot be added!");
      } else {
        let newTask = new Task({
          name: req.body.name,
          description: req.body.description,
        });

        newTask.save().then((savedTask, saveErr) => {
          if (saveErr) {
            res.send("There is an error saving the task.");
          } else {
            res.status(201).send({
              code: 201,
              message: "Task is now added!",
              data: savedTask,
            });
          }
        });
      }
    },
  );
});

server.post("/tasks/edit/:taskid", (req, res) => {
  Task.findOne({ _id: req.params.taskid }).then((result, err) => {
    if (result == null) {
      res.send("Task not found. Cannot edit!");
    } else {
      result.name = req.body.name;
      result.description = req.body.description;

      result.save().then((updatedTask, updateErr) => {
        if (updateErr) {
          res.send("There is an error updating the task.");
        } else {
          res.status(200).send({
            code: 200,
            message: "Task is now updated!",
            data: updatedTask,
          });
        }
      });
    }
  });
});

server.post("/tasks/:taskid/task-completed", (req, res) => {
  Task.findOne({ _id: req.params.taskid }).then((result, err) => {
    if (result == null) {
      res.send("Task not found. Cannot complete!");
    } else {
      result.status = "completed";
      result.dateCompleted = new Date();

      result.save().then((updatedTask, updateErr) => {
        if (updateErr) {
          res.send("There is an error updating the task.");
        } else {
          res.status(200).send({
            code: 200,
            message: "Task is now completed!",
            data: updatedTask,
          });
        }
      });
    }
  });
});

server.listen(port, () => console.log(`Server is now running`));
