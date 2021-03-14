/*
 * Author: Sean / Lucas
 * Credit: 'CS340-Sample-Web-App' by wolfordj
 */

function deleteGenre(genreID){
    $.ajax({
        url: '/genre/' + genreID,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};