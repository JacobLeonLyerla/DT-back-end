const User = require("../tagRoutes/user");

const validateRegisterInput = require("../validation/register");

const createUser = (req, res) => {
  const myNewUser = new User(req.body);

  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  myNewUser
    .save()

    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
module.exports = createUser;