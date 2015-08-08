var mongoose = require('mongoose');
var env = require('../local.js');
var mongoDBConnectionURI;

if (process.env.NODE_ENV === 'production') {
  mongoDBConnectionURI = env.MONGO_URI;
} else {
  mongoDBConnectionURI = 'mongodb://localhost/shortly';
}


mongoose.connect(mongoDBConnectionURI, {
  user: 'shortly',
  pass: 'qwerty'
}); // connect to mongo database named shortly
