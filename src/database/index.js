const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foodloop');
mongoose.Promise = global.Promise;

module.exports = mongoose;
