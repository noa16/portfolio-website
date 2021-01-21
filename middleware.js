const jwt = require("jsonwebtoken");

const config = require("config");

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");
  console.log(token)
  //check if not token
  if (!token) {
    console.log("not valid token")
    return res.status(401).json({ msg: "no token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
