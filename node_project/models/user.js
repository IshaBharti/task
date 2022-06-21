const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: { type: String },
	email: { type: String },
	number: { type: Number },
	password: {
		type: String,
	},
});
const User = mongoose.model('User', userSchema);
module.exports = User;
