const mongoose = require('mongoose');
const db_path = process.env.DB;
mongoose.connect(db_path);

const db = mongoose.connection;
db.on('error',console.error.bind("Error while connection to the server"));

db.on('open',function(){
    console.log('DataBase is up and running !!');
})

module.exports = db;