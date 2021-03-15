function updateSong(songID){
    $.ajax({
        url: '/songs/' + songID,
        type: 'PUT',
        data: $('#update-song').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};