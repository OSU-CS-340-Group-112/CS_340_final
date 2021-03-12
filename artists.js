/* 
 * Author: Sean-Michael Riesterer
 * Credit: Starter code from CS340-Sample-Web-App by wolfordj
 */

module.exports = function(){
    var express = require('express');
    var router = express.Router();

    /* Selector for All Artists */ 
    function getArtists(res,mysql,context,complete){
        mysql.pool.query("SELECT artistID, primaryArtist, recordLabel FROM artist",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.artist = results;
            complete(); 
        });
    }

    /* Route to display all artists */ 
    router.get('/',function(req,res){
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getArtists(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('artistsPage',context);
            }
        }
    });

    /* Function to Add a person */
    router.post('/', function(req,res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO artist (primaryArtist, recordLabel) VALUES (?,?)";
        var inserts = [req.body.primaryArtist, req.body.recordLabel];
        sql  = mysql.pool.query(sql,inserts,function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/artists');
            }
        });
    });


    return router;
}();