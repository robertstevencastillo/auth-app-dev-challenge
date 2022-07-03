const express = require('express')
const router = express.Router();

router.get('/auth', (request, response) => {
  response.sendStatus(200);
})

module.exports = router;