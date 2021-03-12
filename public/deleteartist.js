/*
 * Author: Sean-Michael Riesterer
 * Credit: 'CS340-Sample-Web-App' by wolfordj
 */

function deleteArtist(artistID){
    $.ajax({
        url: '/artists/' + artistID,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};