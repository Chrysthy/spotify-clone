import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js';

const newArtistArray = artistArray.map((currentArtistObjs) => {

    const newArtistObj = { ...currentArtistObjs };
    delete newArtistObj.id

    return newArtistObj;

});

const newSongsArray = songsArray.map((currentSongObjs) => {

    const newSongObj = { ...currentSongObjs };
    delete newSongObj.id

    return newSongObj;

});

const responseSongs = await db.collection('songs').insertMany(newSongsArray);

const responseArtists = await db.collection('artists').insertMany(newArtistArray);

console.log(responseArtists);
// console.log(responseSongs);
