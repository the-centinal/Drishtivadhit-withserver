const mongoose = require("mongoose");
const path = require('path');
const file_path = path.join('/public/uploads');
const multer = require('multer');
const docSchema = new mongoose.Schema({
    // userFiles : {
    //     type:Array,
    //     required:true
    // },
    title : {
        type:String,
        required:true
    },

    description : {
        type:String,
        required:true
    },
    fileup:{
        type:String,
    },
    user:{
        type:  mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }
      
},  {timestamps: true});

let filestorage = multer.diskStorage({destination:(req,res,cb)=>{
    cb(null,path.join(__dirname,'..',file_path));
},
filename:(req,file,cb)=>{
    cb(null,Date.now()+"--"+file.fieldname);
},
});

docSchema.statics.uploadedFile = multer({storage:filestorage}).single('userFiles');
docSchema.statics.filepath = file_path;

const Documents = new mongoose.model("Documents", docSchema);

module.exports = Documents;