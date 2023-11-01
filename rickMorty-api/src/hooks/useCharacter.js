import { useState } from "react";

export function useCharacter() {
    const [allCharact, setAllCharact] = useState([]);

    const getAllCharacters = () => {
      return fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setAllCharact(data.results));
       
    }
    return{
        allCharact,
        getAllCharacters,
    };
}