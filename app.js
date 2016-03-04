'use strict';

//Requires
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let passport = require('passport');
let session = require('express-session');
let request = require('superagent');

//Connect to MongoDB
//mongoose.connect('mongodb://127.0.0.1:27017/ME1555');
//Require the config for PassportJS
require('./app/config/passport.js')(passport);

//Static content
app.use('/lib/', express.static(__dirname + '/lib'));
app.use('/lib/fonts', express.static(__dirname + '/lib/fonts'));
app.use('/app/', express.static(__dirname + '/app'));
app.use('/views/', express.static(__dirname + '/public/views'));
app.use('/css/', express.static(__dirname + '/public/css'));
app.use('/img/', express.static(__dirname + '/public/img'));
app.use('/js/', express.static(__dirname + '/public/js'));

//App session for saving data in sessions
app.use(session({
    secret: 'somethingsosecretyouwouldntevenknow',
    resave: true,
    saveUninitialized: true
}));

//Engage in Passport session
app.use(passport.initialize());
app.use(passport.session());

//Require the passport auth file
require('./app/routes/authRoute.js')(app, passport);

//Test route
app.get('/', function(req, res){
    res.sendFile('./public/index.html', { root : __dirname});
});

//TODO: Start using the Youtube API to create streams
/*app.get('/createStream', function(req, res){
    
});*/

//Start server and listen on port 8000
let server = app.listen(8000, 'localhost', function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Running at ${host}:${port}`);
});
