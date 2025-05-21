const prisma = require("../prisma");
const { taskSchema } = require("../validators/taskValidator");

exports.createTask = async (req, res) => {
  try {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const task = await prisma.task.create({ data: value });
    const user = await prisma.user.findUnique({ where: { id: value.user_id } });

    console.log(
      `Notification sent to user ${user.email} for this new  task: ${value.title} Powered By Zuck`
    );

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  const user_id = parseInt(req.params.user_id);
  try {
    const tasks = await prisma.task.findMany({ where: { user_id } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTaskStatus = async (req, res) => {
  const task_id = parseInt(req.params.id);
  const { status } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: task_id },
      data: { status },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
