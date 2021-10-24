import React from "react";

const SearchBar = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Chercher un pokemon..."></input>
                <button type="submit"> Rechercher</button>
            </form>
        </div>
    );
};

export default SearchBar;
