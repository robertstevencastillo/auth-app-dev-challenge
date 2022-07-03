const mongoose = require('mongoose')
const config = require('config')
const { log } = require('./logger')

async function connectToDb(){
  const dbUri = config.get('defaultConfig.dbUri')

  try {
    // TODO: Create a valid url to a live mongoDB instance
    await mongoose.connect('dbUri')

    log.info("connected to DB")
  }
  catch(e){
    console.log(e)
    process.exit(1)
  }
}

module.exports = connectToDb