
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