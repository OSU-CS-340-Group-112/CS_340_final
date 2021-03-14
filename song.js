/* 
 * Author: Lucas Tolliver/ Sean
 * Credit: Starter code from CS340-Sample-Web-App by wolfordj
 */

module.exports = function(){
    var express = require('express');
    var router = express.Router();

    /* 
        ====================SELECT===================== 
        =============================================== 
    */

    /* Selector for All songs */ 
    function getSongs(res,mysql,context,complete){
        mysql.pool.query("SELECT songTitle, alID, runTime, writingCredit FROM song",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.song = results;
            complete(); 
        });
    }

    /* Selector for one song */
    function getSong(res, mysql, context, songID, complete){
        var sql = "SELECT songTitle, alID, runTime, writingCredit FROM song WHERE songID = ?";
        var inserts = [songID];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.song = results[0];
            complete();
        });
    }
    /* 
        ====================DISPLAY==================== 
        =============================================== 
    */

    /* Route to display all songs */ 
    router.get('/',function(req,res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletesong.js"];
        var mysql = req.app.get('mysql');
        getSongs(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('songsPage',context);
            }
        }
    });


    /* Route to display one song */
    router.get('/:songID', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["updatesong.js"];
        var mysql = req.app.get('mysql');
        getSong(res, mysql, context, req.params.songID, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-song',context);
            }
        }
    });
    
    /* 
        ====================UPDATE===================== 
        =============================================== 
    */

    /* Route to add an song */
    router.post('/', function(req,res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO song (songTitle, runTime, writingCredit) VALUES (?,?,?)";
        var inserts = [req.body.songTitle, req.body.runTime, reg.body.writingCredit];
        sql  = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error));
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/song');
            }
        });
    });





    return router;
}();