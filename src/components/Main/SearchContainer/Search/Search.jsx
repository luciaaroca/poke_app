import React,{useState} from "react";
//<Search />: recibe setValue como prop, para actualizar el estado value cuando el usuario escribe y envía.

const Search = ({setValue}) => { //prop del Componente Padre (valor del input)
  //ESTADO
  const [input, setInput] = useState("");//Estado del input (en principio está vacío)
  
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
       </section>;
};

export default Search;
