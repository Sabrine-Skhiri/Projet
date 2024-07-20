const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// Création du serveur
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Le serveur écoute sur le port ${PORT}`);
});
