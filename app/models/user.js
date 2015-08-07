//var db = require('../config');
//var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  salt: String
});

UserSchema.methods.comparePasswords = function (candidatePassword, callback) {
  var savedPassword = this.password;

  bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
    callback(isMatch);
  });

};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      user.set('password', hash);
      next();
    });

});

module.exports = mongoose.model('users', UserSchema);
