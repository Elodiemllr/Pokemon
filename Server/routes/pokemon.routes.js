const router = require("express").Router();
//ici on require notre controller pour pouvoir l'utiliser suivant la route
const pokemonController = require("../controllers/pokemon.controller.js");

//on veut recuperer tout nos pokemons
router.get("/", pokemonController.getAllPokemon);
//On veut voir qu'un pokemon spécifique
router.get("/:id", pokemonController.getOnePokemon);

module.exports = router;
