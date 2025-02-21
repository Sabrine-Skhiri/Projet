const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require ('jsonwebtoken');
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Vérifier si l'utilisateur existe déjà avec cet email
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ errors: [{ msg: "Email should be unique, try again" }] });
    }

    // Hashage du mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Créer un nouvel utilisateur
    const newUser = new User({ name, email, password: hashedPassword, phone });
    await newUser.save();
    //creation token 
    const token = jwt.sign(
      {id : newUser._id
      },
      process.env.SECRET_KEY,
      {expiresIn:"1h"}
    );

    // Réponse en cas de succès
    res.status(200).send({ msg: "Registered successfully", user: newUser , token});
  } catch (error) {
    // Réponse en cas d'erreur
    return res.status(400).send({ errors: [{ msg: "Cannot register" }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "Bad credential!" }] });
    }

    // Comparaison des mots de passe
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "Bad credential!" }] });
    }
//creation token 
const token = jwt.sign(
  {id : foundUser._id
  },
  process.env.SECRET_KEY,
  {expiresIn:"1h"}
);

    res.status(200).send({ msg: "Login successful", user: foundUser ,token});
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot login" }] });
  }
};
