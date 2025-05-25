import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';

const newArtistArray = artistArray.map((currentArtistObjs) => {

    const newArtistObj = { ...currentArtistObjs };
    delete newArtistObj.id

    return newArtistObj;

})

const newSongArray = songsArray.map((currentSongObjs) => {

    const newSongObj = { ...currentSongObjs };
    delete newSongObj.id

    return newSongObj;

})