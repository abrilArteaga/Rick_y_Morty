import { useEffect, useState } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";
export function Character() {
  const {allCharact, getAllCharacters} = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);
  
  return (
    <div>
     <div> 
        <div id= "Boton"> 
    <button type="submit">Docs</button>
    <button type="submit">About</button>
    <button type="submit">SUPPORT US </button>
    </div>
    <div  id="Encabezado">
    <h1>The Rick and Morty api</h1>
    </div>  
    <ul className="contenedor">
      {allCharact.map((item, index) => (
        <li key={index}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <p>{item.origin.name}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}