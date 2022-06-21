var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mydb';

mongoose.connect(url, function (err, db) {
	if (err) throw err;
	console.log('Database created!');
});
