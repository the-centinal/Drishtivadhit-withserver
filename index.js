const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const multer = require('multer');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const expresslayout = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startagy');
const MongoStore = require('connect-mongo');
const mongodb = require('mongodb');
const axios = require('axios');
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', './view');



app.use(express.static('./public'));


app.use(session({
    name: 'password_genrator',
    // TODO change the secret before deployment in production mode
    secret: 'decodetoencode',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/mydatabase',
    
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){console.log('***************error',err);return;}
    console.log(`The server is running on port :${port}`)
})