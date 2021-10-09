const mongoose = require('mongoose');
const db_path = process.env.DB;
// const Grid = require('gridfs-stream');

 mongoose.connect(db_path);

const db =   mongoose.connection;
db.on('error',console.error.bind("Error while connection to the server"));

db.once('open',function(){
    console.log('DataBase is up and running !!');
    // const gfs = Grid(process.env.DB, mongoose.mongo);
    // console.log(gfs);

})

// module.exports = {db:db,gfs:gfs};
module.exports = db;