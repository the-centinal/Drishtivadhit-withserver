
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
module.exports.profile = function(req,res){
    return res.render('loginmainprofile');
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