import React from "react";
import Image from "./Image";
import '../App.css'

class Pokemon extends React.Component {
  render() {
    return (
      <section className="pokemon-section">
        <div className="text">
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>Average weight: {this.props.weight} {this.props.measurement}</p>
        </div>  
        <Image image={this.props.image}/>
      </section>
    )
  }
}

export default Pokemon;