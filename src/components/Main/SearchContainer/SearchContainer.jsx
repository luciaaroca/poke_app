import React, { useState, useEffect} from "react";
import axios from "axios";

import PokemonList from "./PokemoList/PokemoList" //Importamos Componente: PokemonList(renderizado)
import Search from "./Search/Search" //Importamos Componente: Search: input + botón

//CONTENEDOR PADRE: 
//- Mantiene el estado (texto del input y lista de pokemons)
//- Pasa props a Search (input + botón) y a PokemonList (lista para renderizar).

const SearchContainer = () => {
  //ESTADOS
  const [value, setValue] = useState(""); //Almacena el texto que escribe el usuario en el INPUT
  const [pokemons, setPokemons] = useState([]); //array de POKEMONS mostrados.

  //LLAMADA A LA API
  //UseEffect:un hook que sirve para ejecutar código “secundario” o “efectos"----------
  useEffect(() => {
    if (!value) return; // No hacer la petición si no hay valor
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`
        );
        setPokemons([res.data]); 
      } catch (e) {
        setPokemons([]); // No mostrar nada si hay error
      }
    }

    fetchData();
  }, [value]);

 
  return <section>
      <Search setValue={setValue}/>
      <PokemonList  pokemons={pokemons} />
    </section>
};

export default SearchContainer;
