const User = require('../models/user');
module.exports.register = async function(req,res){
    try{

        if(req.body.pass === req.body.cpass) {

            await User.create(req.body);
   
            return res.redirect('/');
     
     
    
    
        } else{
            return res.redirect('back');
        }
           
          
       } catch (error) {
           res.status(400).send(error);
       }
    
}


module.exports.createSession = function(req, res){
    console.log('susseful');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    
    req.logout();
    console.log("success",'logged out');
    return res.redirect('/');
}