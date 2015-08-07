var mongoose = require('mongoose');
var mongoDBConnectionURI;

if (process.env.NODE_ENV === 'production') {
  mongoDBConnectionURI =
    'mongodb://MongoLab-w1:iTgM648ERSjq_QC5IJzcVDf2hHGUHBiSOJ7dU_5T0lY-@ds045097.mongolab.com:45097/MongoLab-w1';
} else {
  'mongodb://localhost/shortly'
  mongoDBConnectionURI = 'mongodb://localhost/shortly';
}


mongoose.connect(mongoDBConnectionURI); // connect to mongo database named shortly
