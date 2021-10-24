import axios from "axios";
import React, { useState } from "react";
import Result from "../Result.js";
import SearchBar from "../SearchBar.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
    //pour stocker dans mon state ma liste de pokemon mise a jour suivant la recherche
    const [list, setList] = useState([]);

    //je recupère tous mes pokemons de ma bdd avec la méthode get de axios, et je les stock  dans ma list

    axios({
        méthod: "get",
        url: `${BASE_URL}`,
    }).then((res) => {
        console.log(res.data.results);
    });

    return (
        <div>
            <SearchBar />
            <Result pokemonList={list} />
        </div>
    );
};

export default Home;
