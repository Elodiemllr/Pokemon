import React from "react";

//ici je met en params ma pokemon list que je recup dans home via ma bdd
const Result = ({ pokemonList }) => {
    console.log(pokemonList);
    return (
        //Puis je vais faire un map sur ma liste pour tous les afficher (je veux tout de ma bdd)
        <div>
            {pokemonList.map((onePokemon) => (
                <div test={onePokemon.name}> </div>
            ))}
        </div>
    );
};

export default Result;
