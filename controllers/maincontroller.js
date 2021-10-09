const Doc = require('../models/document');
var mongoose = require('mongoose');
let P_Doc = require('../models/public_document');
const { docupload } = require('./doccontroller');
var MongoClient = require('mongodb').MongoClient;
const Grid = require('gridfs-stream');
const db = require('../config/mongoose');
const gfs = Grid(db, mongoose.mongo);


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

        
      
        gfs.collection('photos');
        gfs.files.find().toArray(function(err,files){
            if(!files || files.length === 0){console.log('no files')}
            console.log(files);
        })

        return res.render('english-page/profile',{documenents:documents});
    }catch(err){
        console.log("********* here is a error",err);
        req.flash('error',"Error in loading your profile");
    }
}

module.exports.downloaddocument = async function (req,res){
    try{

        const directory = (__dirname + "/.."+req.body.file).toString();

        res.download(directory,"image.pdf",(err)=>{
            if(err){console.log("Error",err);
            req.flash('error',"Error in downloading");

        }
        })

    }
    catch(err){
        console.log("ERROR :::::::::::::::::::",err);
    }
}