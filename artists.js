/* 
 * Author: Sean-Michael Riesterer
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

    /* Selector for one artist */
    function getArtist(res, mysql, context, artistID, complete){
        var sql = "SELECT artistID, primaryArtist, recordLabel FROM artist WHERE artistID = ?";
        var inserts = [artistID];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.person = results[0];
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
        context.jsscripts = ["deleteartist.js"];
        var mysql = req.app.get('mysql');
        getArtists(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('artistsPage',context);
            }
        }
    });


    /* Route to display one artist */
    router.get('/:artistID', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["updateperson.js"];
        var mysql = req.app.get('mysql');
        getArtist(res, mysql, context, req.params.artistID, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-artist',context);
            }
        }
    });

    /* 
    ====================UPDATE===================== 
    =============================================== 
    */

    /* Route to add an artist */
    router.post('/', function(req,res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO artist (primaryArtist, recordLabel) VALUES (?,?)";
        var inserts = [req.body.primaryArtist, req.body.recordLabel];
        sql  = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error));
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/artists');
            }
        });
    });


    /* Route to update an artist */
    router.put('/:artistID', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE artist SET primaryArtist=?, recordLabel=? WHERE artistID=?";
        var inserts = [req.body.primaryArtist, req.body.recordLabel]
    })

    /* Route to delete an artist */
    router.delete('/:artistID', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM artist WHERE artistID = ?";
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