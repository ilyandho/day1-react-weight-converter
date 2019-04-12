import React, { Component } from "react";
import "./App.css";

import InputForm from "./components/Input/Input";
import Kilo from "./components//Kilo/Kilo";
import Mili from "./components/Mili/Mili";
class App extends Component {
  state = {
    grammes: 0
  };

  render() {
    const grammes = e => {
      const value = e.target.value;
      this.setState({ grammes: value });
    };
    return (
      <div className="App">
        <h2 className="header">My React Weight Converter</h2>
        <div className="main">
          <InputForm grammes={grammes} />
          <hr />
          <Kilo grammes={this.state.grammes} />
          <Mili grammes={this.state.grammes} />
        </div>
        <footer>
          <a
            href="https://github.com/ilyandho/day1-react-weight-converter/"
            target="blank"
          >
            Source code
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
