/* 
 * Author: Sean / Lucas
 * Credit: Starter code from CS340-Sample-Web-App by wolfordj
 */

module.exports = function(){
    var express = require('express');
    var router = express.Router();

    /* 
        ====================SELECT===================== 
        =============================================== 
    */

    /* Selector for All artists */ 
    function getGenres(res,mysql,context,complete){
        mysql.pool.query("SELECT genreID, genreName FROM genre",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.artist = results;
            complete(); 
        });
    }
    
    /* 
        ====================DISPLAY==================== 
        =============================================== 
    */

    /* Route to display all artists */ 
    router.get('/',function(req,res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletegenre.js"];
        var mysql = req.app.get('mysql');
        getArtists(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('genrePage',context);
            }
        }
    });
    
    /* Route to add an artist */
    router.post('/', function(req,res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO genre (genreName) VALUES (?)";
        var inserts = [req.body.genreName];
        sql  = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error));
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/genre');
            }
        });
    });
    
    /* Route to delete an artist */
    router.delete('/:genreID', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM genre WHERE genreID = ?";
        var inserts = [req.params.artistID];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                console.log(JSON.stringify(error));
                res.status(400);
                res.end();
            }else{
                res.status(202).end();
            }
        });
    });


    return router;
}();