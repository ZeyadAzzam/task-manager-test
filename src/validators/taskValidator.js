const Joi = require("joi");
const { task_status } = require("@prisma/client");

exports.taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string()
    .valid(...Object.values(task_status))
    .optional(),
  user_id: Joi.number().required(),
});
