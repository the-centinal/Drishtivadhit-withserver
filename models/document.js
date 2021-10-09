const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const {GridFsStorage} = require("multer-gridfs-storage");

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


// var storage = new GridFsStorage({
//     url: process.env.DB,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+"--"+file.fieldname);
//     }
//   });
var storage = new GridFsStorage({
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {  
        return {
          bucketName: "photos",
          filename: `${Date.now()}-pboss-${file.originalname}`,
        };
      }
  });

docSchema.statics.uploadedFile = multer({storage:storage}).single('userFiles');
docSchema.statics.filepath = "/document/";
const Documents = new mongoose.model("Documents", docSchema);

module.exports = Documents;