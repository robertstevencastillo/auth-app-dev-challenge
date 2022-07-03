// Default config file
const defaultConfig = {
  port: 3000,

  // TODO: Setup a mongoDB database for this project
  dbUri: "mongodb+srv://api_user:user_api@cluster0.czh6p.mongodb.net/dev-chall-auth-app?retryWrites=true&w=majority",
  logLevel: "info"
}

module.exports = {
  defaultConfig
}