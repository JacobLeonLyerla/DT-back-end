const router = require("express").Router();
const jwt = require('jsonwebtoken');

const User = require("./user");
const validateToken = (req, res, next) => {
    // this piece of middleware is taking the token delivered up to the server and verifying it
    // if no token is found in the header, you'll get a 422 status code
    // if token is not valid, you'll receive a 401 status code
    const token = req.headers.authorization;
    if (!token) {
      res
        .status(422)
        .json({ error: 'No authorization token found on Authorization header' });
    } else {
      jwt.verify(token, "secret212312", (err, decoded) => {
        if (err) {
          res
            .status(401)
            .json({ error: 'Token invalid, please login', message: err });
        } else {
          // token is valid, so continue on to the next middleware/request handler function
          next();
        }
      });
    }
  };
router.get("/", validateToken, (req, res) => {
    User.find({})
      .select('username')
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        return res.send(err);
      });
  });
  module.exports = router;
