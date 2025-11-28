import { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PokemonContext } from './context/PokemonContext.js' //PROVEEDOR DE CONTEXTO

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  //Proveer este estado a los compomentes consumidores -> Lista pokemons
  //Añadimos a traves de PokemonForm
  const [pokemonList, setPokemonList] = useState([]);

  
  const updatePokemon  = (newPokemon) => { //-> actualiza la lista de pokemons con el nuevo pokemon del form
    setPokemonList([...pokemonList, newPokemon]);
  };
  //Datos para alimentar al contexto que se va a PROVEER
  const pokemonData = {pokemonList, updatePokemon}
  return (
    <>
     <PokemonContext.Provider value={pokemonData}> 
        <BrowserRouter>
            <Header/>
            <Main/>
        </BrowserRouter>
     </PokemonContext.Provider> 
      <Footer/>
    </>
  )
}

export default App
