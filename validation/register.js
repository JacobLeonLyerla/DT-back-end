const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput = ({ username, email, password, password2 }) => {
  let errors = {};
  username = !isEmpty(username) ? username : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";
  if (!Validator.isLength(username, { min: 6, max: 30 })) {
    errors.username =
      "Username most be six or more characters, no more than thirty.";
  }
  if (Validator.isEmpty(username)) {
    errors.username = "Please enter a username.";
  }
  if (Validator.isEmpty(email)) {
    errors.email = "Please enter an Email.";
  }
  if (!Validator.isEmail(email)) {
    errors.email = "This email is not valid, please try another.";
  }
  if (Validator.isEmpty(password)) {
    errors.password = "Please enter a password.";
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password =
      "Password most be six or more characters, no more than thirty.";
  }
};
module.exports = validateRegisterInput;
