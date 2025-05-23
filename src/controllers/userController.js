const prisma = require("../prisma");
const { userSchema } = require("../validators/userValidator");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const existingUser = await prisma.user.findUnique({
      where: { email: value.email },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "!Oh No User with this email already exists" });
    }

    const password = 10;
    const hashedPassword = await bcrypt.hash(value.password, password);

    const userData = { ...value, password: hashedPassword };

    const user = await prisma.user.create({ data: userData });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
