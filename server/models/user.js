const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    someID: String,
    token: String
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
