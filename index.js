require("dotenv").config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const multer = require('multer');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startagy');
const MongoStore = require('connect-mongo');
const mongodb = require('mongodb');
const axios = require('axios');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const flashMiddelware = require('./config/flas-middelware');
const { env } = require("process");
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', './view');

app.use(bodyParser.json());
app.use(session({
    name : 'secret',
    secret:process.env.SECRET_KEY,
    saveUninitialized :false,
    resave:false,
    cookie:{
        maxAge:(1000*60*1000),
    },
    store: MongoStore.create({
        mongoUrl: process.env.DB,
    
    })
    
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(flashMiddelware.setFlash);
app.use(express.static('./public'));
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){console.log('***************error',err);return;}
    console.log(`The server is running on port :${port}`)
})