const checkUsername = (user) => {
  return /^[a-zA-Z]+$/.test(user)
}

console.log("Username is just letters: ",  checkUsername("Tommy"))
