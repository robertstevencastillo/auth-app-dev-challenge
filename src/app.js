require('dotenv').config()
const express = require('express');
const config  = require('config');
const connectToDb = require('./utils/connectToDb.js');
const log  = require("./utils/logger.js")
const router = require("./routes/index.js")

const app = express()
const port = config.get('defaultConfig.port')

// MIDDLEWARES
app.use(router)

app.listen(port, () => {
  log.info(`Listening at http://localhost:${port}`)
  

  // TODO: Uncomment once you've setup a mongoDB database for this project
  // connectToDb()
})