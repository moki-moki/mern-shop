const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(403).json("Token is not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not an admin");
    }
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
};
