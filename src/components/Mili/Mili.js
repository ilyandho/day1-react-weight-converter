import React, { Component } from "react";
import "./Mili.css";
class Mili extends Component {
  render() {
    const grammes = this.props.grammes;

    const mili = grammes * 1000;
    return (
      <div className="mili">
        <h2 className="name">Mili Output: </h2>
        <h2 className="value">{mili}</h2>;
      </div>
    );
  }
}

export default Mili;
