import React from "react";
import PokemonList from "./PokemonList";
import data from "../data"
import '../App.css'

class Pokedex extends React.Component {
  render() {
    return (
      <main className="container">
        <h1 id='pokedex-text'>Pokedex</h1>
        <PokemonList pokemon={data}/>
      </main>
    )
  }
}

export default Pokedex;