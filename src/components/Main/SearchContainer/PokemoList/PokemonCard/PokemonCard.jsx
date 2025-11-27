import React from "react";
//Contenido de la card de pokemons
const PokemonCard = ({pokemon}) => { //prop pokemon del contenedor Padre PokemonList
  const id = pokemon.id;
  const name = pokemon.name;
  const image= pokemon.sprites.front_default;
  const typeOne= pokemon.types[0].type.name;
  const typeTwo= pokemon.types[1]?.type.name;

  return <article>
    <h1>{name}</h1>
    <p>{id}</p>
    <img src={image}></img>
    <p>{typeOne}</p>
    <p>{typeTwo}</p>
  </article>;
};

export default PokemonCard;
