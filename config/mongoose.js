const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Harsh:Hackathon@cluster0.rb7ly7l.mongodb.net/Catalyst?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;