//API  significa Application Programming Interface
//Post, Get, Put, Delete
//CRUD - Create, Read, Update, Delete
//Endpoint - URL, onde a API pode ser acessada por uma aplicação
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})