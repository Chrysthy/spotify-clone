import express from 'express';
import cors from 'cors';
import { db } from './connect.js';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
//transforma em json

app.get('/api/', (request, response) => {
    response.send("'Hello World! Utilizando o node --watch ./api/server.js'");
})

app.get('/api/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get('/api/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})

