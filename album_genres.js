module.exports = function()
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
    function getAlbumsWithGenres(res, myqsl, context, complete){
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
