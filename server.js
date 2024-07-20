const express = require("express");
const app = express();
require("dotenv").config();
const connectDB=require("./config/connectDB");
connectDB();
const PORT = process.env.PORT;

// Création du serveur
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Le serveur écoute sur le port ${PORT}`);
});
