#table:artist

DROP TABLE IF EXIST 'artist';
CREATE TABLE 'artist' (
    'artistID' int(11) NOT NULL AUTO_INCREMENT,
    'primaryArtist' varchar(255) NOT NULL,
    'recordLabel' varchar(255) NOT NULL,
    PRIMARY KEY ('artistID'),
    UNIQUE KEY 'primaryArtist' ('primaryArtist')
    UNIQUE KEY 'recordLabel' ('recordLabel')
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#table: album
DROP TABLE IF EXIST 'album';
CREATE TABLE 'album' (
    'artistID' int(11) NOT NULL,
    'featuredArtist' varchar(255) NOT NULL,
    'albumTitle' varchar(255) NOT NULL,
    'albumID' int(11) NOT NULL AUTO_INCREMENT,
    UNIQUE KEY 'featuredArtist' ('featuredArtist'),
    UNIQUE KEY 'albumTitle' ('albumTitle'),
    PRIMARY KEY ('albumID'),
    CONSTRAINT 'album_ibfk1' FORGIEN KEY ('artistID') REFERENCES 'artist'
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#table: song
DROP TABLE IF EXIST 'song';
CREATE TABLE 'song' (
    'songTitle' varchar(255) NOT NULL,
    'albumID' int(11) NOT NULL,
    'runTime' float(64) NOT NULL,
    'writingCredit' varchar(255) NOT NULL,
    UNIQUE KEY 'songTitle' ('songTitle'),
    UNIQUE KEY 'writingCredit' ('writingCredit'),
    CONSTRAINT 'song_ibfk1' FOREIGN KEY ('albumID') REFERENCES 'album'
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#table: genre
DROP TABLE IF EXIST 'genre';
CREATE TABLE 'genre' (
    'genreID' int(11) NOT NULL AUTO_INCREMENT,
    'genreName' varchar(255) NOT NULL,
    PRIMARY KEY ('genreID'),
    UNIQUE KEY 'genreName' ('genreName')
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#table: genre join table
DROP TABLE IF EXIST 'genreIT'
CREATE TABLE 'genreIT' (
    'albumID' int(11) NOT NULL AUTO_INCREMENT
    CONSTRAINT 'genre_ibfk1' FOREIGN KEY ('albumID') REFERENCES 'album'
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert artists
LOCK TABLES 'artist' WRITE;
INSERT INTO 'artist' VALUES
    ('JOJI', '88RISING'),
    ('DRAKE', 'OVIO'),
    ('KENDRICK LAMAR', 'TOP DOG ENT');
UNLOCK TABLES;

#insert album
LOCK TABLES 'album' WRITE;
INSERT INTO 'album' VALUES
    ('JOJI', 'NECTAR'),
    ('DRAKE', 'VIEWS'),
    ('KENDRICK LAMAR', 'DAMN');
UNLOCK TABLES;

#insert song
LOCK TABLES 'song' WRITE;
INSERT INTO 'song' VALUES
    ('EW', '208', 'ANTONIO NORWOOD'),
    ('TICK TOCK', '122', 'GEORGE MILLER'),
    ('DAYLIGHT', '164', 'GEORGE MILLER'),
    ('HOTLINE BLING','267','DRAKE'),
    ('VIEWS','312','DRAKE'),
    ('TOO GOOD','263','DRAKE'),
    ('BLOOD','118','KL'),
    ('DNA','185','KL'),
    ('FEEL','214','KL');
UNLOCK TABLES;

#insert genre
LOCK TABLES 'genre' WRITE;
INSERT INTO 'genre' VALUES
    ('RAP'),
    ('POP');
UNLOCK TABLES;
    