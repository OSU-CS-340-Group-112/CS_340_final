/* artist queries */
INSERT INTO artist (primaryArtist, recordLabel) VALUES ("$string1", "$string2");

SELECT artist.primaryArtist, artist.recordLabel FROM artist

UPDATE artist
SET primaryArtist = "$string1", recordLabel = "$string2"
WHERE artist.artistID = $int;

DELETE FROM artist WHERE artist.artistID = $int;

/* album queries */
INSERT INTO album (artID, featuredArtist, albumTitle) VALUES ("intID", "$string1", "$string2");

SELECT album.artID, album.featuredArtist, album.albumTitle FROM album

UPDATE album
SET featuredArtist = "$string1", albumTitle = "$string2", artID = "$int"
WHERE album.albumID = $int;

DELETE FROM album WHERE album.albumID = $int;

/* song queries */
INSERT INTO song (songTitle, alID, runTime, writingCredit) VALUES ("$string1", "int1", "$int2", "$string2");

SELECT song.songTitle, song.runTime, song.writingCredit FROM song

UPDATE song
SET songTitle = "$string1", writingCredit = "$string2", runTime = "$int"
WHERE song.songID = $int;

DELETE FROM song WHERE song.songID = $int;

/* genre queries */
INSERT INTO genre (genreName) VALUES ("$string1");

SELECT genre.genreName FROM genre

UPDATE genre
SET genreName = "$string1"
WHERE genre.genreID = $int;

DELETE FROM genre WHERE genre.genreID = $int;
