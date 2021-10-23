// Les models nous permettent de voir a quoi va ressembler la BDD de pokemon (les infos qu'on va recevoir lors de notre requêtes etc)
const mongoose = require("mongoose");

//On déclare ce qui sera dans notre "Schéma" d'un pokemon
const pokemonSchema = new mongoose.Schema(
    {
        pokemonId: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        picture: {
            type: String,
        },

        abilities: {
            type: [
                {
                    abilityId: String,
                    abilityName: String,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default pokemonSchema;
