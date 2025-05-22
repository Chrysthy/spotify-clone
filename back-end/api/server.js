import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('Hello World! Utilizando o node --watch ./api/server.js');
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})

