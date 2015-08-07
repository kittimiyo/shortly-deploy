var app = require('./server-config.js');

<<<<<<< HEAD
var port = process.env.port || 4568;
=======
var port = process.env.PORT || 4568;
>>>>>>> 110ad811fa215dbb256156b2eb8716c92deab059

app.listen(port);

console.log('Server now listening on port ' + port);
