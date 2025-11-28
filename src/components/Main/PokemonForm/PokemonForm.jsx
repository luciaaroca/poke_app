
import React ,{ useContext, useState} from 'react'
import { PokemonContext } from '../../../context/PokemonContext' //CONTEXTO
import "./PokemonForm.css"

//TIPOS DE POKEMONS
const pokemonTypes = [
  "normal", "fire", "water", "grass", "electric", "ice"
];
//CONSUMIDOR: consumirá este contexto para poder añadir un nuevo pokemon al sistema.
const PokemonForm = () => {
  //Consumir el CONTEXTO
  const { updatePokemon } = useContext(PokemonContext);
  //ESTADO FORMULARIO
  const [newPokemon, setNewPokemon] = useState({ 
            id: "",
            name: "",
            image: "",
            typeOne:"",
            typeTwo:"",
          });
     
    //Se ejecuta cada vez que el usuario escribe un input -> a la lisra de newPokemon
    const handleChange = (e) => {
            setNewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value,
            });
        };

     //Función que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePokemon (newPokemon);
        setNewPokemon({
          id: "",
          name: "",
          image: "",
          typeOne: "",
          typeTwo: ""
        });
  };
  return <div>
    <h1>Add your Pokemon!!</h1>
    <form className="addPokemon" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="number" name="id" value={newPokemon.id} onChange={handleChange} required /> 
    
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newPokemon.name}
          onChange={handleChange}
          minLength="3"
          required
        />
        
        <label>Photo (URL):</label>
        <input type="text" name="image" value={newPokemon.image} onChange={handleChange} required />
    
         <label>Type 1:</label>
        <select name="typeOne" value={newPokemon.typeOne} onChange={handleChange} required>
          <option value="">Select type</option>
          {pokemonTypes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label>Type 2:</label>
        <select name="typeTwo" value={newPokemon.typeTwo} onChange={handleChange}>
          <option value="">Select type</option>
          {pokemonTypes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
       
      <button type="submit">ADD</button>
    </form>
    </div>
};
  


export default PokemonForm;
