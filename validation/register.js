const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput =({username,email,password,password2})=>{
    let errors = {};
    username = !isEmpty(username)?username:"";
    email =!isEmpty(email)?email:"";
    password = !isEmpty(password)?password:"";
    password2 = !isEmpty(password2)?password2:"";
    

}