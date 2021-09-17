const express = require('express');
const port = 8000
const app = express();
const path = require('path');

const axios = require('axios');
app.use(express.urlencoded());

app.set('view engine', 'hbs');
app.set('views', './view');



app.use(express.static('./public'));

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){console.log('***************error',err);return;}
    console.log(`The server is running on port :${port}`)
})