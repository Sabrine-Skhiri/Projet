const express =require("express");
const Contact = require("../models/Contact");
const router = express.Router();
//ROUTES 
//add contact
router.get("/add",async(req ,res)=> {
 try{
const { name , email , phone }=req.body;
const newContact= new Contact({name , email ,phone})
 await newContact.save();
 res.status (200).send({ msg:"contact add successfully", newC4})
}
 catch(error) {
res.status(400).send({msg:"cannot add contact ",error})
 }
})
 
//get all contact
//get one contact
//delete contact
//edit contact

module.exports= router ;