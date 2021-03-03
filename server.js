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
var port = process.env.PORT || 3000;

app.use(express.static('HTML'));

app.get('/', function(req,res) {
    console.log("== received GET request for /");
    res.status(200).send(HTML/index);
})

/* Start server listening on TCP port */
app.listen(port,function() {
    console.log("== Server is listening on port ",port);
});
