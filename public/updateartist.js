function updateArtist(artistID){
    $.ajax({
        url: '/artists/' + artistID,
        type: 'PUT',
        data: $('#update-artist').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};