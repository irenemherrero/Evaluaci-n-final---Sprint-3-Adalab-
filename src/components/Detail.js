import React, { Component, Fragment } from "react";
import ButtonBack from "./ButtonBack";
import PropTypes from "prop-types";

class Detail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { characterList } = this.props;
    let characterToPrint;
    if (characterList.length !== 0) {
        characterToPrint = characterList[id];
        localStorage.setItem('characterToPrint', JSON.stringify(characterToPrint));
    } else {
        const characterSaved = JSON.parse(localStorage.getItem('characterToPrint'))
        characterToPrint = characterSaved;
    }
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
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
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
  };
};

Detail.propTypes = {
  characterList: PropTypes.array,
  match: PropTypes.object
};

export default Detail;
