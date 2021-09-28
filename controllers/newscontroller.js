const axios = require('axios');

module.exports.news = async function(req,res){
    try{
        const newsapi = await axios.get(process.env.NEWS_API)
        // console.log(newsapi.data.articles[0]);
        return res.render('news.hbs',{articles : newsapi.data.articles});



    }catch(err){
        console.log("***********************error",err);
        return res.send('Error in renderring news : ',err);
    }
}
module.exports.index = function(req,res){
    try{
        return res.render('index.hbs');

    }catch(err){
        console.log("***********************error",err);
        return res.send('error boi');
    }
}