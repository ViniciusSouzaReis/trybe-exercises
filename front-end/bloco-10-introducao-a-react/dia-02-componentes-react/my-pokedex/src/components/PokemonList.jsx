import React from "react";
import Pokemon from "./Pokemon";
import '../App.css'

class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section className="container-section">
        {pokemon.map((pokemon) => (
          <Pokemon name={pokemon.name} type={pokemon.type} weight={pokemon.averageWeight.value} measurement={pokemon.averageWeight.measurementUnit} image={pokemon.image}/>
        ))}
      </section>  
    )
  }
}

export default PokemonList;