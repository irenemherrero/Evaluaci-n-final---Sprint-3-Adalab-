import React, { Component } from "react";
import "../styles/ButtonBack.css";
import { Link } from "react-router-dom";

class ButtonBack extends Component {
  render() {
    return (
      <Link to="/">
        <button className="ButtonBack">¡Vuelve atrás con tu Ninbus!</button>
      </Link>
    );
  }
}

export default ButtonBack;
