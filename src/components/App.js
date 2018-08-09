import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import Detail from './Detail';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      filteredList: [],
      value: '',
    }
    this.handleLetterChange = this.handleLetterChange.bind(this)
    this.filterResults = this.filterResults.bind(this)
    this.filterCharacters = this.filterCharacters.bind(this)
  }

  // Llamo a la api para recibir los datos

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => {
        return response.json();
      })

      //Pongo un ID a los datos que me llegan en JSON 

      .then((json) => {
        console.log(json)
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
    const { characterList, value, filteredList } = this.state;
    return !value
      ? characterList
      : filteredList
  }

  //Pongo el valor del value en el estado de la madre. 
  //En el callback filtro el array completo de personajes para que me devuelva solo aquellos cuyo nombre incluya las letras que ha escrito el usuario, es decir, las del value.

  handleLetterChange(event) {
    this.setState(
      {
        value: event.currentTarget.value
      }, this.filterCharacters
    );
  }

  filterCharacters() {
    const arrayFiltered = this.state.characterList.filter((character) =>
      character.name.toUpperCase().includes(this.state.value.toUpperCase()));
    console.log('che', arrayFiltered);
    this.setState({ filteredList: arrayFiltered })
  }

  render() {
    console.log(this.state.value);
    return (
      <Switch>
        <Route
          exact path='/'
          render={() =>
            <CharacterList
              characterListToPrint={this.filterResults}
              handleLetterChange={this.handleLetterChange}
              valueInput={this.state.value}
            />
          }
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
