const House = require('../models/House');

// Contrôleur pour publier une annonce de maison
exports.publishHouse = async (req, res) => {
  try {
    const { title, description, price, location, images } = req.body;

    // Création d'une nouvelle annonce de maison
    const newHouse = new House({
      title,
      description,
      price,
      location,
      images,
      createdAt: Date.now(),
    });

    // Sauvegarde de l'annonce dans la base de données
    await newHouse.save();

    // Réponse en cas de succès
    res.status(201).send({ msg: "House published successfully!", house: newHouse });
  } catch (error) {
    // Réponse en cas d'erreur
    res.status(500).send({ errors: [{ msg: "Cannot publish house" }] });
  }
};

// Contrôleur pour récupérer toutes les annonces de maisons
exports.getHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).send({ houses });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Cannot fetch houses" }] });
  }
};

// Contrôleur pour récupérer une annonce spécifique par son ID
exports.getHouseById = async (req, res) => {
  try {
    const houseId = req.params.id;
    const house = await House.findById(houseId);
    if (!house) {
      return res.status(404).send({ errors: [{ msg: "House not found" }] });
    }
    res.status(200).send({ house });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Cannot fetch house" }] });
  }
};
