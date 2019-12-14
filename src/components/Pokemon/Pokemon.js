import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

class Pokemon extends React.Component {
  state = { name: "", pokemonIndex: "", imageUrl: "" };
  async componentDidMount() {
    const { pokemonIndex } = this.props.params.pokemonIndex;
    //Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    //Get Pokemon Information
    const pokemonRes = await axios.get(pokemonUrl);
    const name = pokemonRes.data.name;
    this.setState({ name });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Pokemon />, rootElement);
