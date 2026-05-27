require("dotenv").config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

/* RUTA API */
app.get("/api/reservas", (req, res) => {
  res.json({ mensaje: "Reservas funcionando" });
});

/* PUERTO */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
