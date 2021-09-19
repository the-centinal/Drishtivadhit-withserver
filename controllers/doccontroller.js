const Doc = require('../models/document');
module.exports.docupload = async function(req,res){
    try{
        let user = req.user.id;
        
        let doc = await Doc.uploadedFile(req,res,async function(err){
            console.log(doc);
            if(err){
                console.log('*****************Multer err ',err);
            }
            console.log(req.body);
            console.log(req.file);
            await Doc.create({
                title: req.body.title,
                description: req.body.description,
                fileup: req.file.filename,
                user: req.user._id
            })
            return res.redirect('back',{
                message: "uploaded successfully"
            });

        });
    }
    catch(err){
        console.log('err',err);
        return res.redirect('back');
    }
    
}