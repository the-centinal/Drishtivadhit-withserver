const Doc = require('../models/document');
const P_Doc = require('../models/public_document');

module.exports.docupload = async function(req,res){
    try{
        let user = req.user.id;
        
        let doc = await Doc.uploadedFile(req,res,async function(err){
        
            if(err){
                console.log('*****************Multer err ',err);
            }
            console.log(req.body);
            console.log(req.file);
            await Doc.create({
                title: req.body.title,
                description: req.body.description,
                fileup: Doc.filepath + '/' + req.file.filename,
                user: req.user._id
            })
            return res.redirect('back');

        });
    }
    catch(err){
        console.log('err',err);
        return res.redirect('back');
    }
    
}
module.exports.pdocupload = async function(req,res){
    try{
        let user = req.user.id;
        
        let pdoc = await P_Doc.uploadedFile(req,res,async function(err){
            
            if(err){
                console.log('*****************Multer err ',err);
            }
            console.log(req.body);
            console.log(req.file);
            await P_Doc.create({
                title: req.body.title,
                description: req.body.description,
                fileup: Doc.filepath + '/' + req.file.filename,
                user: req.user._id
            })
            return res.redirect('back');

        });
    }
    catch(err){
        console.log('err',err);
        return res.redirect('back');
    }
    
}