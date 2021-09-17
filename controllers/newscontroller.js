const axios = require('axios');

module.exports.news = async function(req,res){
    try{
        const newsapi = await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=226ce4281c3a491b9bb177b8f174ad32`)
        // console.log(newsapi.data.articles[0]);
        return res.render('news.hbs',{articles : newsapi.data.articles});



    }catch(err){
        console.log("***********************error",err);
        return res.send('error boi');
    }
}
module.exports.index = function(req,res){
    try{
        return res.render('index.hbs')

    }catch(err){
        console.log("***********************error",err);
        return res.send('error boi');
    }
}