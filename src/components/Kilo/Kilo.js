import React, { Component } from "react";

import "./Kilo.css";

class Kilo extends Component {
  render() {
    const grammes = this.props.grammes;

    const kilo = grammes * 1000;
    return (
      <div className="kilo">
        <h2 className="name">Kilo Output:</h2>
        <h2 className="value"> {kilo}</h2>
      </div>
    );
  }
}

export default Kilo;
