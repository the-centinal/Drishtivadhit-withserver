const Doc = require('../models/document');
var mongoose = require('mongoose');
let P_Doc = require('../models/public_document');
const { docupload } = require('./doccontroller');
var MongoClient = require('mongodb').MongoClient;
const Grid = require('gridfs-stream');
const db = require('../config/mongoose');
const fs = require('fs');
// const gfs = Grid(db, mongoose.mongo);
const gfs = new mongoose.mongo.GridFSBucket(db,{bucketName: 'photos'});
module.exports.index = function(req,res){
    return res.render('english-page/index');
}
module.exports.register = function(req,res){
    return res.render('english-page/register');
}
module.exports.docupload = function(req,res){
    return res.render('english-page/docupload');
}
module.exports.pdocupload = function(req,res){
    return res.render('english-page/publicdocupload');
}
module.exports.donation = function(req,res){
    return res.render('english-page/donation');
}
module.exports.loginmain = function(req,res){
    return res.render('english-page/loginmain');
}

module.exports.app = function(req,res){
    return res.render('english-page/app');
}
module.exports.publicdoc = async function(req,res){
    let pubicdoc = await P_Doc.find({});
    return res.render('english-page/public-document',{documenents:pubicdoc});
}
module.exports.goal = function(req,res){
    return res.render('english-page/goal');
}
module.exports.member = function(req,res){
    return res.render('english-page/member');
}
module.exports.event = function(req,res){
    return res.render('english-page/event');
}
module.exports.profile = async function(req,res){
    try{
        let documents = await Doc.find({user:req.user});

        // gfs.collection('photos');
        // gfs.find().toArray(function(err,files){
        //    console.log(files);
        // });

        return res.render('english-page/profile',{documenents:documents});
    }catch(err){
        console.log("********* here is a error",err);
        req.flash('error',"Error in loading your profile");
    }
}

module.exports.downloaddocument = async function (req,res){
    try{

        const filename =req.params.file;
      

        await gfs.openDownloadStreamByName(filename)
            .pipe(fs.createWriteStream(filename))
            .on('error', ()=>{
                console.log("Some error occurred in download:"+error);

                res.send(error);
            })
            .on('finish', ()=>{
         
                const directory = (__dirname +'/../' + filename).toString();
          
            res.download(directory,filename,async (err)=>{
                if(err){
                    console.log("Error",err);
                    // req.flash('error',"Error in downloading");

           
        
                }
                fs.unlink(filename, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                    console.log('File deleted!');
                });
        
            })
       
            });
            
        
       

    }
    catch(err){
        console.log("ERROR :::::::::::::::::::",err);
    }
}

module.exports.viewdoc = function(req,res){
    try{
        gfs.find({filename: req.params.filename}).toArray((err,file) =>{
            
           
            if(!file[0] || file.length[0] === 0){console.log('no files')}
    
      
            if(file[0].contentType === 'image/png' || file[0].contentType === 'image/jpg' || file[0].contentType === 'image/jpeg' ){
                gfs.openDownloadStreamByName(req.params.filename).pipe(res);
            }else{
                gfs.openDownloadStreamByName('1633771292030-pboss-Artboard 7.png').pipe(res);
                
            }
        });
        

    }catch(err){
        res.status(404).json({
            err : 'datanot found'+err,
        });
    }

}