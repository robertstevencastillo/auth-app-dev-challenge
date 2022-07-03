const express = require('express')
const router = express.Router();
const userRoute = require("./user/user.route")
const authRoute = require("./auth/auth.route")

router.get('/status', (request, response) => {
  response.sendStatus(200);
})

router.use(userRoute);
router.use(authRoute);

module.exports = router;