const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

//Encrypt password On Save Hook
//Before saving a model, run this function
userSchema.pre('save', function(next) {
  //get access to the user model
  const user = this;

  //Generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) }

    //Hash(encrypt) password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) }
      
      //Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
});

//Compare (hashed) stored password to user supplied password on login
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(er) }

    callback(null, isMatch);
  })
}

//Create the model class
const UserModelClass = mongoose.model('user', userSchema);

//Export model
module.exports = UserModelClass;