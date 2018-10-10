import React, { Component, Fragment } from "react";
import ButtonBack from "./ButtonBack";
import "../styles/Detail.css";
import PropTypes from "prop-types";

let characterToPrint;

class Detail extends Component {

  componentWillMount() {
    const { characterList } = this.props;
    const { id } = this.props.match.params;
    characterToPrint = characterList[id];
    if (characterToPrint === undefined) {
      console.log('Traigo datos de API');
      fetch(`https://hp-api.herokuapp.com/api/characters`)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        console.log(json[2]);
        const characterFromApi = json[2];
        //NO ME ESTÁ GUARDANDO ESTO EN LET CHARACTERTOPRINT (ARRIBA);
        characterToPrint = characterFromApi;
        console.log(characterToPrint);
      });
    } else {
      console.log(characterToPrint);
      console.log('Traigo datos de props');
    }
  }

  render() {
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
