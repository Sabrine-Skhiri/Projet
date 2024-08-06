const express = require("express");
//2
const app = express();
//5
require("dotenv").config();
//6
const connectDB=require("./config/connectDB");
connectDB();
const userRoutes = require('./routes/user');
//7.routes
//middleware
app.use(express.json())
app.use('/api/user',userRoutes);
app.use('/api/contact',require('./routes/contact'));
//3
const PORT = process.env.PORT;

// Création du serveur//4
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Le serveur écoute sur le port ${PORT}`);
});
