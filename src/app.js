import express from "express";

const app = express();
const PUERTO = 8080;



app.get("/", (req, res) => {
    res.send("conectado");
})


app.listen(PUERTO, () => {
    console.log(`escuchando en http://localhost:${PUERTO}`);
})