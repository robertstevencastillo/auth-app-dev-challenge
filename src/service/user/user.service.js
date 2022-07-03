const UserModel = require("../../model/user/user.model");

function createUser(newUser){
  return UserModel.create(newUser)
}

module.exports = {
  createUser
}