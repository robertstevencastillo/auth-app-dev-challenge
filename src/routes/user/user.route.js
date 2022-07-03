const express = require('express')
const router = express.Router();
const userController = require("../../controller/user/user.controller")

router.post("/api/user", (request, response) => {
  userController.createUser(request, response)
})

module.exports = router;