var mongoose = require('mongoose');
var env = require('../local.js');
var mongoDBConnectionURI;

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(env.MONGO_URI, {
    user: 'shortly',
    pass: 'qwerty'
  }); // connect to mongo database named shortly
} else {

  console.log('mongoose connect');

  mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));