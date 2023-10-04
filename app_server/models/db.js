const mongoose = require('mongoose'); 
require('dotenv').config();
const PORT = process.env.PORT || 3000;
var gracefulShutdown;
const dbURI = 'mongodb://o.o.o.o:27017/RAMYA08';
if (process.env.NODE_ENV === 'production'){
    dbURI = process.eventNames.MONGODB_URI;
}
mongoose.connect(dbURI);


mongoose.connection.on('connected', function () { 
    console.log('Mongoose connected to ' + dbURI); 
});
mongoose.connection.on('error', function (err) { 
    console.log('Mongoose connection error: ' + err); 
});
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose disconnected'); 
}); 
require('./locations');

