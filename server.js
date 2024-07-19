const express= require ("express")
//create instance
const app= express();
const PORT = 2020;
//create server
app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log("server is running on port $(PORT)");
}) ;