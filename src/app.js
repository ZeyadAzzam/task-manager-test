const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const setupSwagger = require("./utils/swagger");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

setupSwagger(app);

module.exports = app;
