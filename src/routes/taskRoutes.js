const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasksByUser,
  updateTaskStatus,
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/users/:user_id/tasks", getTasksByUser);

router.patch("/:id", updateTaskStatus);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Task created successfully
 */

/**
 * @swagger
 * /tasks/users/{user_id}/tasks:
 *   get:
 *     summary: Get all tasks for a user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: A list of tasks
 */

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Update task status
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *     responses:
 *       200:
 *         description: Task updated
 */

module.exports = router;
