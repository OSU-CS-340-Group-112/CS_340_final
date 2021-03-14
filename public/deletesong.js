/*
 * Author: Sean / Lucas
 * Credit: 'CS340-Sample-Web-App' by wolfordj
 */

function deleteSong(songID){
    $.ajax({
        url: '/song/' + songID,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};