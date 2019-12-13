import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-mb navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            Pokedex
          </a>
        </nav>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NavBar />, rootElement);
