import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import Detail from './Detail';
import Loading from './Loading';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      filteredList: [],
      value: '',
      valueSelect:"",
    }
    this.handleLetterChange = this.handleLetterChange.bind(this)
    this.filterResults = this.filterResults.bind(this)
    this.filterCharacters = this.filterCharacters.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    this.filterByLife=this.filterByLife.bind(this)
  }

  // Llamo a la api para recibir los datos

  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => {
        return response.json();
      })

      //Pongo un ID a los datos que me llegan en JSON 

      .then((json) => {
        const characterListWithId = [];
        for (let i = 0; i < json.length; i++) {
          characterListWithId[i] = {
            ...json[i],
            id: i
          }
        }

        //Guardo el array con los id en el estado (modificando el vacío)

        this.setState({
          characterList: characterListWithId,
          filteredList: characterListWithId,
        })
      })
  }

  // Selecciono el array que voy a enviar a CharacterList para que lo imprima

  filterResults() {
    const { characterList, value, filteredList, valueSelect } = this.state;
    return !value && !valueSelect
      ? characterList
      : filteredList
  }

  //Pongo el valor del value en el estado de la madre. 
  //En el callback filtro el array completo de personajes para que me devuelva solo aquellos cuyo nombre incluya las letras que ha escrito el usuario, es decir, las del value.

  handleSelect(event){
    this.setState(
      {
        valueSelect: event.currentTarget.value
      }, this.filterByLife
    );
  }
  handleLetterChange(event) {
    this.setState(
      {
        value: event.currentTarget.value
      }, this.filterCharacters
    );
  }

  filterByLife() {
    console.log('AQUÏ', this.state.characterList);
    const arrayLife = this.state.characterList.filter((character) => {
      if(character.alive === true && this.state.valueSelect === "Vivo"){
        return true;
      } else if (character.alive === false && this.state.valueSelect === "Muerto") {
        return true;
      } else if (this.state.valueSelect === "Todos"){ 
        return true;
      } else {
        return false;
      }
    })
    this.setState({filteredList: arrayLife})
  }

  filterCharacters() {
    const arrayFiltered = this.state.characterList.filter((character) =>
      character.name.toUpperCase().includes(this.state.value.toUpperCase()));
    console.log('che', arrayFiltered);
    this.setState({ filteredList: arrayFiltered })
  }

  render() {
    return (
      <Switch>
        <Route
          exact path='/'
          render={() => {
            return this.state.characterList.length >= 25
            ? <CharacterList
                characterListToPrint={this.filterResults}
                handleLetterChange={this.handleLetterChange}
                valueInput={this.state.value}
                handleSelect={this.handleSelect}
              />
            : <Loading/>
          }}
        />
        <Route
          path='/character/:id'
          render={props =>
            <Detail
              match={props.match}
              characterList={this.state.characterList}
            />
          }
        />
      </Switch>
    );
  }
}

export default App;
