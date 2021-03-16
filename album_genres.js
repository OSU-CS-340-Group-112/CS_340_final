module.exports = function(){

    var express = require('express');
    var router = express.Router();

    /* Get Albums */
    function getAlbums(res, mysql, context, complete){
        mysql.pool.query("SELECT albumID AS albID, albumTitle FROM album", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                console.log(JSON.stringify(error));
                res.end();
            }
            context.albums = results;
            complete();
        });
    }


    /* Selector for All Genres */ 
    function getGenres(res,mysql,context,complete){
        mysql.pool.query("SELECT genreID AS genID, genreName FROM genre",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.genres = results;
            complete(); 
        });
    }

    /* Get Albums with their Genres */
    function getAlbumsWithGenres(res, mysql, context, complete){
        sql = "SELECT albID, genID, FROM album INNER JOIN genreIT on album.albumID = genreIT.albID INNER JOIN genre on genre.genreID = genreIT.genID ORDER BY albumTitle, genreName"
        mysql.pool.query(sql, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                console.log(JSON.stringify(error));
                res.end();
            }
            context.albums_with_genres = results;
            complete();
        });
    }


    /* Route to display Albums with Genres */
    router.get('/', function(req,res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletealbum.js"];
        var mysql = req.app.get('mysql');
        
        getAlbums(res,mysql,context,complete);
        getGenres(res,mysql,context,complete);
        getAlbumsWithGenres(res,mysql,context,complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('intersectPage',context);
            }
        }
    });
    
    return router;
}();