function searchSongbyTitle() {
    var song_string = document.getElementById('song_title_search').value
    window.location = '/song/search/' + encodeURI(song_title_search)
}