const jwt = require("jsonwebtoken");
const { verifyJWT } = require("../utils/jwtUtils");

function authenticateJWT(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Unauthorized!! Please provide a token");
  }
  try {
    const decoded = verifyJWT(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).send("Invalid token");
  }
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Forbidden!! Insufficient role");
    }
    next();
  };
}

module.exports = { authenticateJWT, authorizeRole };
