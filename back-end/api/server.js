import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from 'path';
import listEndpoints from "express-list-endpoints";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

// Middleware para servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("/*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

