/*
 * Author: Sean-Michael Riesterer
 * Credit: CS-290 Lecture notes by Rob Hess, and my own past work.
 * Description: Back-End Node.js Express server implementation
 * Date: 3/3/21
 */


/* Set-Up Express variables */
var path = require('path');
var express = require('express');
var app = express(); 
app.use(express.static('HTML'));

/* Get port from command line argument */
var port = process.argv[2];

/* Set mySQL */
var mysql = require('mysql'); 
var con = require('./dbcon.js'); 



app.get('/', function(req,res) {
    console.log("== received GET request for /");
    res.status(200).send(HTML/index);
})

/* Start server listening on TCP port */
app.listen(port,function() {
    console.log('== express started on http://localhost:' + port);
});
