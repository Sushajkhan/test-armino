const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token)
    return res
      .status(401)
      .sen({ message: "Authentication required. Please log in." });

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).message({ error: "Token is not valid!" });

    next();
  });
};

module.exports = { verifyToken };
