const mongoose = require('mongoose');
const argon2 = require('argon2');
const log = require('../utils/logger');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: { type: String },
  phone: { type: String },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
})

// Mongoose middleware that will automatically hash the password before it’s saved to the database.
UserSchema.pre('save', async function () {
  var user = this;

  // if password has not been modified, then just exit.
  if (!user.isModified('password')) return;

  // hash password
  const hashedPassword = await argon2.hash(user.password);
  user.password = hashedPassword;

  return;
})

UserSchema.methods.validatePassword = async function (currentPassword) {
  try {
    return await argon2.verify(this.password, currentPassword) // Comparing the hashed password on the schema to the password that the user is attempting to login with
  }
  catch (error) {
    log.error(error, "Could not validate password")
    return false;
  }
}

module.exports = UserSchema;