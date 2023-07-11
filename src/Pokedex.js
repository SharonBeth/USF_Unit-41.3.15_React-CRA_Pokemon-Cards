import React from "react";
import "./Pokedex.css"

const POKEMON_IMG_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


function Pokedex({ id, name, type, exp }) {
    const img = `${POKEMON_IMG_BASE}${id}.png`

    return (
        <div className="Pokedex">
            <div className="Pokedex">
                <div className="Pokedex-title">{name}</div>
                <img className="Pokecard-image" src={img} alt={name} />
                <div className="Pokedex-data">Type: Words {type}</div>
                <div className="Pokedex-exp">EXP: {exp}</div>
            </div>
        </div>
    )
}




export default Pokedex;