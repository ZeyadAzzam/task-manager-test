const Joi = require("joi");

exports.taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string().valid("pending", "in_progress", "completed").optional(),
  user_id: Joi.number().required(),
});
