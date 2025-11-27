import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./PokemonDetail.css"

//RUTAS
//https://pokeapi.co/api/v2/pokemon/3
//https://pokeapi.co/api/v2/pokemon/5


const PokemonDetail = () => {
  const { id } = useParams(); // params
  const location = useLocation(); // URL

  //ESTADOS
  const [pokemonDetail, setPokemonDetail] = useState(null);

  //QUERY PARAMS
  
  

  //DATOS DE LA API -> useEffect()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = id
          ? `https://pokeapi.co/api/v2/pokemon/${id}`
          : "Introduzca un id por params: https://pokeapi.co/api/v2/pokemon/5 ";
        const response = await fetch(url);
        const data = await response.json();
        
        setPokemonDetail(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]); // detecta un cambio en params,query params 

  //FUNCIÓN DE RENDERIZADO
  const renderOnePokemon = () => {
    if (!pokemonDetail) return "No se ha encontrado este pokemon";
    return (
        <>
        <h1>Pokemon Detail</h1>
        <h2>Name: {pokemonDetail.name}</h2>
        <img src={pokemonDetail.sprites.front_default}></img>
        <p><b>ID:</b> {pokemonDetail.id}</p>
        <p><b>Abilities:</b> {pokemonDetail.abilities[0].ability.name} / {pokemonDetail.abilities[1].ability.name}</p>
        <p><b>Base Experience:</b> {pokemonDetail.base_experience }</p>
        <p><b>TypeOne:</b>{pokemonDetail.types[0].type.name}</p>
        <p><b>TypeTwo:</b> {pokemonDetail.types[1]?.type.name}</p>
       
      </>
    )
  }
  return <div>
    {id ? renderOnePokemon() : ""}
    </div>;
};

export default PokemonDetail;
