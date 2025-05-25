//criando um scipt que consome a API.
//Requisição do front.
//Pode usar o Fetch ou Axios.

import axios from 'axios';

const URL = "http://localhost:3000/";

const responseArtists = await axios.get(`${URL}/artists`);

console.log(responseArtists);
