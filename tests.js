const checkUsername = (user) => {  // anonymous function, has no name. user is the parameter
  return /^[a-zA-Z]+$/.test(user)   // pattern for a name, that can contain letter from a to z, small or capital, is not accepting number
}

const checkEmail = (email) => {     // email is the parameter
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(patter(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)   // pattern for email
}

const checkPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(password)
}

console.log("username just letters: ",  checkUsername("Tommy"))
console.log("valid email: ",  checkEmail("abc@abc.de"))  // ("abc@abc.de") is the argument
console.log("check password: ",  checkPassword("Gede5?gfgf"))  






/* function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
} */

/* var regularExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
Minimum eight characters, at least one letter, one number and one special character:


 */