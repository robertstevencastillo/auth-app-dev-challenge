const userService = require('../../service/user/user.service')

async function createUser(request, response){
  const body = request.body
  
  try{
    const user = userService.createUser(body);
    return response.send("User created.");
  }
  catch(error){
    return response.status(500).send(error);
  }
}

module.exports = {
  createUser
}