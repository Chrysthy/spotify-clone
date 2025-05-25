import express from 'express';
import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js';


const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send("'Hello World! Utilizando o node --watch ./api/server.js'");
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})

