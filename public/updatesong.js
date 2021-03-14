function updateSong(songID){
    $.ajax({
        url: '/song/' + songID,
        type: 'PUT',
        data: $('#update-song').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};