import React, { Component } from "react";
import { Link } from "react-router-dom";

class ButtonBack extends Component {
  render() {
    return (
      <Link to="/">
        <button className="ButtonBack" >
          <p className="magicParagraph">¡Vuelve atrás con tu Ninbus!</p>
        </button>
      </Link>
    );
  };
};

export default ButtonBack;
