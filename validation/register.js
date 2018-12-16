const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput =({username,email,password,password2})=>{
    let errors = {};
    username = !isEmpty(username)?username:"";
    email =!isEmpty(email)?email:"";
    password = !isEmpty(password)?password:"";
    password2 = !isEmpty(password2)?password2:"";
if(!validator.isLength(username,{min:6,max:30})){
    errors.username = "Username most be six or more characters, no more than thirty."
}
if(validator.isEmpty(username)){
    errors.username ="Please enter a username."
}
if(validator.isEmpty(email)){
    errors.username ="Please enter an Email."
}

}
module.exports = validateRegisterInput