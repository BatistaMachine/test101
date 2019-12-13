import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import NavBar from "./components/layout/NavBar.js";
import "./App.css";
import Dashboard from "./components/layout/DashBoard.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
