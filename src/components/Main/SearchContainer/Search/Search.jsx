import React,{useState, useContext} from "react";
//CONSUMIDOR: Search consumirá este contexto para leer la lista de pokemon creados y tenerlos en cuenta en la lógica de búsqueda
//<Search />: recibe setValue como prop, para actualizar el estado value cuando el usuario escribe y envía.
import { PokemonContext } from "../../../../context/PokemonContext";

const Search = ({setValue}) => { //prop del Componente Padre (valor del input)
  //ESTADO
  const [input, setInput] = useState("");//Estado del input (en principio está vacío)
  //Consumir contexto
  const { pokemonList } = useContext(PokemonContext);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim() !== "") {
        setValue(input); // Actualizamos el estado en SearchContainer
        setInput("");
      }
    };
  return<section>
           <form onSubmit={handleSubmit}>
              <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Busca un Pokémon"
            />
            <button type="submit">Buscar</button>
          </form>
           <p>Total Pokémons creados: {pokemonList.length}</p>
       </section>;
};

export default Search;
