const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dhri');

const db = mongoose.connection;
db.on('error',console.error.bind("Error while connection to the server"));

db.on('open',function(){
    console.log('DataBase is up and running !!');
})

module.exports = db;