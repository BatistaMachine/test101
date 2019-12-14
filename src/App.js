import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import NavBar from "./components/layout/NavBar.js";
import "./App.css";
import Dashboard from "./components/layout/DashBoard.js";
import backgroundImage from "./pattern.png";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./components/Pokemon/Pokemon.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/Pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
