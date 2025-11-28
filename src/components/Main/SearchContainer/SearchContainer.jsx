import React, { useState, useEffect, useContext} from "react";
import axios from "axios";

import { PokemonContext } from "../../../context/PokemonContext";//CONTEXTO

import PokemonList from "./PokemoList/PokemoList" //Importamos Componente: PokemonList(renderizado)
import Search from "./Search/Search" //Importamos Componente: Search: input + botón

//CONTENEDOR PADRE: 
//- Mantiene el estado (texto del input y lista de pokemons)
//- Pasa props a Search (input + botón) y a PokemonList (lista para renderizar).

const SearchContainer = () => {
  //ESTADOS
  const [value, setValue] = useState(""); //Almacena el texto que escribe el usuario en el INPUT
  const [pokemons, setPokemons] = useState([]); //array de POKEMONS mostrados API
  
  //CONTEXTO
  const { pokemonList } = useContext(PokemonContext);
  //LLAMADA A LA API
  //UseEffect:un hook que sirve para ejecutar código “secundario” o “efectos"----------
  useEffect(() => {
    if (!value) return; // No hacer la petición si no hay valor
    async function fetchData() {
      let apiResult = [];
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`//introducimos el valor que se buscrá en el INPUT
        );
        apiResult = [res.data];//estado del array de pokemons con los datos de la api
      } catch (e) {
        apiResult = [];
        console.log("Pokemon no encontrado") // No mostrar nada si hay error
      }
      const localResult = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setPokemons([...localResult, ...apiResult]);
    }

    fetchData();//ejecutar función fetchData
  }, [value, pokemonList]);//[value]-> solo ejecutar el efecto cuando value cambie
    

 //RETURN
 //Pasamos props a los Componentes Hijos(Search/PokemonList)
 //Search -->le pasamos el estado del valor {setValue}
 //PokemonList -->le pasamos el array de pokemons
  return <section>
      <Search setValue={setValue}/> 
      <PokemonList  pokemons={pokemons} />
    </section>
};

export default SearchContainer;
