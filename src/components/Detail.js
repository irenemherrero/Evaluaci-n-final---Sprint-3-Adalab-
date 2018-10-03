import React, { Component, Fragment } from "react";
import ButtonBack from "./ButtonBack";
import "../styles/Detail.css";
import PropTypes from "prop-types";

class Detail extends Component {
  render() {
    console.log(this.props);
    const { characterList } = this.props;
    const { id } = this.props.match.params;
    const characterToPrint = characterList[id];
    console.log(characterToPrint);
    const {
      image,
      name,
      house,
      yearOfBirth,
      patronus,
      alive
    } = characterToPrint;
    return (
      <Fragment>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <div className="MaximumContainer">
          <div className="Container">
            <div className="ImageBox">
              <img className="ImageDetail" src={image} alt={name} />
            </div>
            <div className="TextBox">
              <h1 className="CharacterName"> {name || "Sin nombre"}</h1>
              <h2 className="CharacterData">Casa: {house || "Sin hogar"}</h2>
              <h2 className="CharacterData">
                Nacimiento: {yearOfBirth || "Desconocido"}
              </h2>
              <h2 className="CharacterData">
                Patronus: {patronus || "Desconocido"}
              </h2>
              <h2 className="CharacterData">
                Estado: {alive ? "Vivo" : "Muerto" || "Desconocido"}
              </h2>
              <ButtonBack />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Detail.propTypes = {
  characterList: PropTypes.array,
  match: PropTypes.object
};

export default Detail;
