import React, { Component, Fragment } from "react";
import ButtonBack from "./ButtonBack";
import "../styles/Detail.css";
import PropTypes from "prop-types";

let characterToPrint;
  
class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: '',
    }
  }

  componentWillMount() {
    const { characterList } = this.props;
    const { id } = this.props.match.params;
    characterToPrint = characterList[id];
    console.log(characterToPrint);
    if (characterToPrint === undefined) {
      console.log(this.state);
      console.log('Traigo datos de LS');
      // TENGO QUE SUSTITUIR 'HERMIONE GRANGER' POR EL NOMBRE DEL ESTADO CUANDO SE GUARDE.
      const dataFromLS = JSON.parse(localStorage.getItem('Hermione Granger'));
      characterToPrint = dataFromLS;
    } else {
      console.log('Traigo datos de props');
      console.log(characterToPrint);
      localStorage.setItem(`${characterToPrint.name}`, JSON.stringify(characterToPrint));
      //NO SE GUARDA EN EL ESTADO EL NOMBRE!!!
      this.setState({
          character: characterToPrint.name,
      }, console.log(this.state.character));
    }
  }

  render() {
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
  }
}

Detail.propTypes = {
  characterList: PropTypes.array,
  match: PropTypes.object
};

export default Detail;
