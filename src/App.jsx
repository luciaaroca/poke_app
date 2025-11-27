// import { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { UserContext } from './context/UserContext.js'

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
   //Proveer este estado a los compomentes consumidores
  // const [username, setUsername] = useState('Lucía');

  
  // const updateUsername = (newUsername) => {
  //   setUsername(newUsername);
  // };
  //Datos para alimentar al contexto que se va a proveer
  // const pokemonData = {pokemonName, updatepokemonName}
  return (
    <>
    {/* <PokemonContext.Provider value={pokemonData}> */}
      <BrowserRouter>
          <Header/>
          <Main/>
      </BrowserRouter>
    {/* </PokemonContext.Provider> */}
      <Footer/>
    </>
  )
}

export default App
