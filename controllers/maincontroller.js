const Doc = require('../models/document');
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
module.exports.donation = function(req,res){
    return res.render('donation');
}
module.exports.loginmain = function(req,res){
    return res.render('loginmain');
}

module.exports.app = function(req,res){
    return res.render('app');
}
module.exports.publicdoc = function(req,res){
    return res.render('public-document');
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
        console.log(documents);
        return res.render('profile',{documenents:documents});
    }catch(err){
        console.log("********* here is a error",err);
    }
}