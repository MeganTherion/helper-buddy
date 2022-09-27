const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);

router
  .route("/:id")
  .get(getTask)
  .put(updateTask) // patch or put? ; ask jake
  .delete(deleteTask);

module.exports = router;
