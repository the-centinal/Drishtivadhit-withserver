const User = require('../models/user');
module.exports.register = async function(req,res){
    try{



        console.log(req.body);
        if(req.body.pass === req.body.cpass) {

            await User.create(req.body);
   
            return res.render('index');
     
     
    
    
        } else{
            return res.redirect('back');
        }
           
          
       } catch (error) {
           res.status(400).send(error);
       }
    
}
// module.exports.login = async function(req,res){
//     try {
//         console.log(req.body);
//         const username = req.body.firstname;
//         const password = req.body.pass;

//         const fname = await User.findOne({firstname:username});
//         console.log(fname);

//         if(fname.pass === password) {
//             res.status(201).render("index");
//         }else {
//             res.send("invalid login details");
//         }

//     } catch (error) {
//         res.status(400).send("error");
//     }
// }

module.exports.createSession = function(req, res){
    console.log('susseful');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    
    req.logout();
    console.log("success",'logged out');
    return res.redirect('/');
}