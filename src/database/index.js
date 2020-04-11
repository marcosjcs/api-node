require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/apinoderest', 
{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;
