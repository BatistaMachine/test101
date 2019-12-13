import React, { Component } from "react";
import ReactDOM from "react-dom";

import PokemonList from "../Pokemon/PokemonList";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Dashboard />, rootElement);
