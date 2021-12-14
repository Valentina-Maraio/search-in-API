import './App.css';
import SearchAppBar from './Search';

import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    Axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemonName}` )
    .then((res) => {
     console.log(res);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search</h1>
        <SearchAppBar  onChange={(eve) => {
          setPokemonName(eve.target.value)
        }}
        />
        <button onClick={searchPokemon} >Search</button>
      </header>
    </div>
  );
}

export default App;
