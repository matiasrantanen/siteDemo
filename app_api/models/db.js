const mongoose = require('mongoose');

const dbURI = 'mongodb://matiasrantanen:testi123@ds233323.mlab.com:33323/nhlnews';

mongoose.connect(dbURI, {useNewUrlParser: true});

//Console messages
mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');