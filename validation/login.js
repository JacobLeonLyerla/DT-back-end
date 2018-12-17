const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

const validateLoginInput = ({username,password})=>{
    let errros = {}
    username = !isEmpty(username)? username:"";
    password = !isEmpty(password)? password:"";

    if(!Validator.isLength(username,{min:2, max:30})){
        errros.username ="Username must be between two and thirty characters.";
    }
    if(Validator.isEmpty(username)){
        errros.username = "You must enter a Password."
    }
    if(!Validator.isLength(password,{min:6,max:30})){
        errros.password ="Password must be between two and thirty characters."
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
module.exports = validateLoginInput
