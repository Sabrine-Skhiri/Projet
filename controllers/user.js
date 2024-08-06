const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Vérifier si l'utilisateur existe déjà avec cet email
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ errors: [{ msg: "Email should be unique, try again" }] });
    }

    // Créer un nouvel utilisateur
    const newUser = new User({ name, email, password, phone });
    await newUser.save();

    // Réponse en cas de succès
    res.status(200).send({ msg: "Registered successfully", user: newUser });
  } catch (error) {
    // Réponse en cas d'erreur
    return res.status(400).send({ errors: [{ msg: "Cannot register" }] });
  }
};

exports.login = async (req, res) => {
  res.send("Login route");
};
