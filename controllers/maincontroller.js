const Doc = require('../models/document');
let P_Doc = require('../models/public_document');
const { docupload } = require('./doccontroller');


module.exports.index = function(req,res){
    return res.render('index');
}
module.exports.register = function(req,res){
    return res.render('register');
}
module.exports.docupload = function(req,res){
    return res.render('docupload');
}
module.exports.pdocupload = function(req,res){
    return res.render('publicdocupload');
}
module.exports.donation = function(req,res){
    return res.render('donation');
}
module.exports.loginmain = function(req,res){
    return res.render('loginmain');
}

module.exports.app = function(req,res){
    return res.render('app');
}
module.exports.publicdoc = async function(req,res){
    let pubicdoc = await P_Doc.find({});
    return res.render('public-document',{documenents:pubicdoc});
}
module.exports.goal = function(req,res){
    return res.render('goal');
}
module.exports.member = function(req,res){
    return res.render('member');
}
module.exports.event = function(req,res){
    return res.render('event');
}
module.exports.profile = async function(req,res){
    try{
        let documents = await Doc.find({user:req.user});
        // console.log(documents);
        return res.render('profile',{documenents:documents});
    }catch(err){
        console.log("********* here is a error",err);
    }
}

module.exports.downloaddocument = async function (req,res){
    try{
        console.log('hitted button');

    }
    catch(err){
        console.log("ERROR :::::::::::::::::::",err);
    }
}