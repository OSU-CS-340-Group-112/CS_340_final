function updateAlbum(albumID){
    $.ajax({
        url: '/albums/' + albumID,
        type: 'PUT',
        data: $('#update-album').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};