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

    /* Selector for All albums */ 
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

    /* Selector for one album */
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