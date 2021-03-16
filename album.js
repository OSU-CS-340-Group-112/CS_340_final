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
    /* Selector for All artists */ 
    function getArtists(res,mysql,context,complete){
        mysql.pool.query("SELECT artistID, primaryArtist FROM artist",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.artists = results;
            complete(); 
        });
    }

    /* Selector for All albums */ 
    function getAlbums(res,mysql,context,complete){
        mysql.pool.query("SELECT albumTitle, albumID, artist.primaryArtist AS artID FROM album INNER JOIN artist ON artID = artist.artistID", function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                console.log(JSON.stringify(error));
                res.end();
            }
            context.album = results;
            complete(); 
        });
    }

    /* Selector for one album */
    function getAlbum(res, mysql, context, albumID, complete){
        var sql = "SELECT albumID, artID, albumTitle FROM album WHERE albumID = ?";
        var inserts = [albumID];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.album = results[0];
            complete();
        });
    }
    /* 
        ====================DISPLAY==================== 
        =============================================== 
    */

    /* Route to display all albums */ 
    router.get('/',function(req,res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletealbum.js"];
        var mysql = req.app.get('mysql');
        getAlbums(res,mysql,context,complete);
        getArtists(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 2){
                res.render('albumsPage',context);
            }
        }
    });


    /* Route to display one album */
    router.get('/:albumID', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["updatealbum.js"];
        var mysql = req.app.get('mysql');
        getAlbum(res, mysql, context, req.params.albumID, complete);
        getArtists(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 2){
                res.render('update-album',context);
            }
        }
    });

    /* 
        ====================UPDATE===================== 
        =============================================== 
    */

    /* Route to add an album */
    router.post('/', function(req,res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO album (albumTitle, artID) VALUES (?,?)";
        var inserts = [req.body.albumTitle, req.body.artID];
        sql  = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error));
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/albums');
            }
        });
    });


    /* Route to update an album */
    router.put('/:albumID', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE album SET artID=?, albumTitle=? WHERE albumID=?";
        var inserts = [req.body.artID, req.body.albumTitle, req.params.albumID];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                console.log(JSON.stringify(error));
                res.end();
            }else{
                res.status(200);
                res.end();
            }
        });
    });


    /* Route to delete an album */
    router.delete('/:albumID', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM album WHERE albumID = ?";
        var inserts = [req.params.albumID];
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