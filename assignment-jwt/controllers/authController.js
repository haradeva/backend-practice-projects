const User = require("../models/userModel");
const { generateJWT } = require("../utils/jwtUtils");

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send("Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).send("Invalid email or password");
  }

  const token = generateJWT(user);
  res.json({ token });
}

async function register(req, res) {
  const { email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  const newUser = new User({ email, password, role });
  await newUser.save();

  const token = generateJWT(newUser);
  res.status(201).json({ token });
}

module.exports = { login, register };
