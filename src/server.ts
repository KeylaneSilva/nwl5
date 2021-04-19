import express, { request, response } from "express";
const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05!", 
    })
});

app.listen(3333, () => console.log("Servidor rodando na porta 3333"))