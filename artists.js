/* 
 * Author: Sean-Michael Riesterer
 * Credit: Starter code from CS340-Sample-Web-App by wolfordj
 */

module.exports - function(){
    var express = require('express');
    var router = express.Router();

    /* Selector for All Artists */ 
    function getArtists(res,mysql,context,complete){
        mysql.pool.query("SELLECT artistID,primaryArtist, recordLabel FROM artist",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.artist = results;
            complete();
        });
    }

    /* Rout to display all artists */ 
    router.get('/artists',function(req,res){
        var context = {};
        var mysql = req.app.get('mysql');
        getArtists(res,mysql,context,complete);
        res.render('artistsPage',context);
    });


    return router;
}();