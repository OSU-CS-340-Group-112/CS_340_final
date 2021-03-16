module.exports = function()
    var express = require('express');
    var router = express.Router();

    /* Get Albums */
    function getAlbums(res, mysql, context, complete){
        mysql.pool.query("SELECT albumID, albumTitle FROM album", function(error, results, fields){
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
        mysql.pool.query("SELECT genreID, genreName FROM genre",function(error,results,fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.genre = results;
            complete(); 
        });
    }