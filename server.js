/*
 * Author: Sean-Michael Riesterer
 * Credit: CS-290 Lecture Notes and Code by Rob Hess, and my own past work.
 * Description: Back-End Node.js Express server implementation
 * Date: 3/3/21
 */


/* Set-Up Express & Handlebars variables */
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express(); 

/* Get port from command line argument */
var port = process.argv[2];

/* Set mySQL variables*/
var mysql = require('./dbcon.js'); 

/* Set bodyParser variable*/
var bodyParser = require('body-parser');

/* App Engine */
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('mysql',mysql)
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended:true}));

/* homePage response */
app.get('/', function(req,res) {
    res.status(200).render('homePage');
}); 

/* Artist Page Response */
app.use('/artists',require('./artists.js'));

/* Album Page Response */
app.use('/albums',require('./album.js'));

/* Genre Page Response */
app.use('/genres',require('./genre.js'));

/* 404 page response */
app.get('*',function(req,res) {
    res.status(404).render('404');
});

/* Start server listening on TCP port */
app.listen(port,function() {
    console.log('== express started on http://localhost:' + port);
});
