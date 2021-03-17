# CS-340 Final
Repository for our CS340 final project, categorizing music releases.

Usage:

> npm install
> 
> npm start PORT_NUMBER


This will run a build script that compiles the handlebars templates and starts the server on https://localhost:PORT_NUMBER 


SUMMARY: 

ARTISTS -----------------------------------------------------------------------------------------

-SELECT: Users may view all of the values in the 'artist' table.

-INSERT: Users may insert a new Artist into the table, specifying an Artist Name and Record Label, ArtistID is auto-assigned. 

-DELETE: Users may delete an artist from the table IF AND ONLY IF the artist is not associated with an Album in the albums table

-UPDATE: Users may edit any entry and save changes to the table. *NOTE* for some reason this messes up the HTML onclick function with DELETE, so in order to delete after updating one must navigate back to home or another page via the navbar in order to get delete to work.


ALBUMS -----------------------------------------------------------------------------------------

-SELECT: Users may view all of the values in the 'albums table.

-INSERT: Users may insert a new album by specifying an album title and selecting an existing artist from the drop-down list.

-DELETE: Users may delete a newly created album, *NOTE* that albums associated with a genre cannot be deleted, this is an issue with genre-intersect delete function not working. :( but for the purposes of *this* album table, delete works. 

-UPDATE: Update does not work, a handlebars page is set up but won't properlyy update. :( 


SONGS -----------------------------------------------------------------------------------------

-SELECT: works

-INSERT: works

-DELETE: works

-UPDATE: works

-FILTER: works by name 


GENRES -----------------------------------------------------------------------------------------

--SELECT: works

-INSERT: works

-DELETE: works *NOTE* ONLY IF NOT ASSOCIATED WITH AN ALBUM IN INTERSECT TABLE. i.e. insert a new genre, then delete it and it works. 

-UPDATE: not implemented



ALBUM-GENRE INTERSECT----------------------------------------------------------------------------

--SELECT: works

-INSERT: works

-DELETE: doesn't work, partially implemented

-UPDATE: not implemented

