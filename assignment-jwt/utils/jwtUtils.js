const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  console.error("Error: SECRET_KEY is not defined!");
}

function generateJWT(user) {
  const payload = {
    userId: user._id,
    email: user.email,
    role: user.role,
  };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, SECRET_KEY, options);
}

function verifyJWT(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { generateJWT, verifyJWT };
