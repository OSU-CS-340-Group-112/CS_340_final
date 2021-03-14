function updateAlbum(albumID){
    $.ajax({
        url: '/album/' + albumID,
        type: 'PUT',
        data: $('#update-album').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};