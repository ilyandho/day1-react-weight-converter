import React, { Component } from "react";

import "./Input.css";

class InputForm extends Component {
  render() {
    const props = { ...this.props };
    return (
      <form>
        <input
          min="0"
          type="number"
          placeholder="Enter weight in grammes"
          onChange={props.grammes}
        />
      </form>
    );
  }
}

export default InputForm;
