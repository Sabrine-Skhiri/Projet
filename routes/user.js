//1
const express = require ("express");
const { register, login } = require("../controllers/user");
const { registerValidation, validation ,loginValidation } = require("../middleware/validator");

//2
const router = express.Router()

// routes
//register 
router.post("/register",registerValidation() , validation , register )
//login

router.post("/login",loginValidation(), validation , login)



//3
module.exports= router ;