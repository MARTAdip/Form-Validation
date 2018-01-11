const checkUsername = (user) => {
  return /^[a-zA-Z]+$/.test(user)
}

console.log("username just letters: ",  checkUsername("Tommy"))
