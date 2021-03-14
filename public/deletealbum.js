/*
 * Author: Sean / Lucas
 * Credit: 'CS340-Sample-Web-App' by wolfordj
 */

function deleteAlbum(albumID){
    $.ajax({
        url: '/albums/' + albumID,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};