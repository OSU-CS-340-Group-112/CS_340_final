#table:artist

DROP TABLE IF EXISTS `artist`;
CREATE TABLE `artist` (
    `artistID` int(11) NOT NULL AUTO_INCREMENT,
    `primaryArtist` varchar(255) NOT NULL,
    `recordLabel` varchar(255) NOT NULL,
    PRIMARY KEY (`artistID`),
    UNIQUE KEY `primaryArtist` (`primaryArtist`),
    UNIQUE KEY `recordLabel` (`recordLabel`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert artists
LOCK TABLES `artist` WRITE;
INSERT INTO `artist` VALUES
    (1, 'JOJI', '88RISING'),
    (2, 'DRAKE', 'OVIO'),
    (3, 'KENDRICK LAMAR', 'TOP DOG ENT');
UNLOCK TABLES;

#table: album
DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
    `artID` int(11) NOT NULL,
    `featuredArtist` varchar(255) NOT NULL,
    `albumTitle` varchar(255) NOT NULL,
    `albumID` int(11) NOT NULL AUTO_INCREMENT,
    UNIQUE KEY `featuredArtist` (`featuredArtist`),
    UNIQUE KEY `albumTitle` (`albumTitle`),
    PRIMARY KEY (`albumID`),
    KEY `artID` (`artID`),
    CONSTRAINT `album_ibfk1` FOREIGN KEY (`artID`) REFERENCES `artist` (`artistID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert album
LOCK TABLES `album` WRITE;
INSERT INTO `album` VALUES
    (1, 'JOJI', 'NECTAR', 1),
    (2, 'DRAKE', 'VIEWS', 2),
    (3, 'KENDRICK LAMAR', 'DAMN', 3);
UNLOCK TABLES;

#table: song
DROP TABLE IF EXISTS `song`;
CREATE TABLE `song` (
    `songID` int(11) NOT NULL AUTO_INCREMENT,
    `songTitle` varchar(255) NOT NULL,
    `alID` int(11) NOT NULL,
    `runTime` int(128) NOT NULL,
    `writingCredit` varchar(255) NOT NULL,
    UNIQUE KEY `songTitle` (`songTitle`),
    PRIMARY KEY (`songID`),
    KEY `alID` (`alID`),
    CONSTRAINT `song_ibfk1` FOREIGN KEY (`alID`) REFERENCES `album` (`albumID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert song
LOCK TABLES `song` WRITE;
INSERT INTO `song` VALUES
    (1, 'EW', 1, '208', 'ANTONIO NORWOOD'),
    (2, 'TICK TOCK', 1, '122', 'GEORGE MILLER'),
    (3, 'DAYLIGHT', 1, '164', 'GEORGE MILLER'),
    (4, 'HOTLINE BLING', 2, '267', 'DRAKE'),
    (5, 'VIEWS', 2, '312', 'DRAKE'),
    (6, 'TOO GOOD', 2, '263', 'DRAKE'),
    (7, 'BLOOD', 3, '118', 'KL'),
    (8, 'DNA', 3, '185', 'KL'),
    (9, 'FEEL', 3, '214', 'KL');
UNLOCK TABLES;

#table: genre
DROP TABLE IF EXISTS `genre`;
CREATE TABLE `genre` (
    `genreID` int(11) NOT NULL AUTO_INCREMENT,
    `genreName` varchar(255) NOT NULL,
    PRIMARY KEY (`genreID`),
    UNIQUE KEY `genreName` (`genreName`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert genre
LOCK TABLES `genre` WRITE;
INSERT INTO `genre` VALUES
    (1, 'RAP'),
    (2, 'POP');
UNLOCK TABLES;

#table: genre join table
DROP TABLE IF EXISTS `genreIT`;
CREATE TABLE `genreIT` (
    `albID` int(11) NOT NULL,
    `genID` int(11) NOT NULL,
    KEY `albID` (`albID`),
    KEY `genID` (`genID`),
    CONSTRAINT `genre_ibfk1` FOREIGN KEY (`albID`) REFERENCES `album` (`albumID`),
    CONSTRAINT `genre_ibfk2` FOREIGN KEY (`genID`) REFERENCES `genre` (`genreID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

#insert genre-join
LOCK TABLES `genreIT` WRITE;
INSERT INTO `genreIT` VALUES
    (1, 2),
    (2, 1),
    (3, 1);
UNLOCK TABLES;