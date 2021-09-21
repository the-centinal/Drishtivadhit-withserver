const mongoose = require("mongoose");
const path = require('path');
const file_path = path.join('/public/uploads');
const multer = require('multer');

const pdocSchema = new mongoose.Schema({
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

let storage = multer.diskStorage({destination:(req,res,cb)=>{
    cb(null,path.join(__dirname,'..',file_path));
},
filename:(req,file,cb)=>{
    cb(null,Date.now()+"--"+file.fieldname);
},
});

pdocSchema.statics.uploadedFile = multer({storage:storage}).single('userFiles');
pdocSchema.statics.filepath = file_path;
// docSchema.statics.uploadedFile = multer({storage:storage}).single('userFiles');

const PublicDocuments = new mongoose.model("PublicDocuments", pdocSchema);

module.exports = PublicDocuments