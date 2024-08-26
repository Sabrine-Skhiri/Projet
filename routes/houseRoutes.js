const express = require('express');
const { publishHouse, getHouses, getHouseById } = require('../controllers/house');
const router = express.Router();

// Route pour publier une annonce de maison
router.post('/publish', publishHouse);

// Route pour récupérer toutes les annonces
router.get('/', getHouses);

// Route pour récupérer une annonce par son ID
router.get('/:id', getHouseById);

module.exports = router;
