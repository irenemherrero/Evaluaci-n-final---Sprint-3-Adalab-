import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import Detail from './Detail';
import Loading from './Loading';

let arrayCharacters = [];
let arrayLife = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      filteredListName: [],
      filteredListLife: [],
      valueName: '',
      valueLife: '',
      doubleFilter: [],
    };
    this.handleLetterChange = this.handleLetterChange.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.filterByLife = this.filterByLife.bind(this);
    this.saveDataLocalStorage = this.saveDataLocalStorage.bind(this);
    this.callApi = this.callApi.bind(this);
    this.compareLists = this.compareLists.bind(this);
  };

  //Compruebo si hay datos en LStorage. Si no, llamo a la API 

  componentDidMount() {
    const dataFromLS = JSON.parse(localStorage.getItem('harry-potter-list'));
    if (dataFromLS) {
      this.setState({
        characterList: dataFromLS,
        filteredList: dataFromLS,
      });
    } else {
      this.callApi();
    };
  };

  // Llamo a la api para recibir los datos

  callApi() {
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
          };
        };

        //Guardo el array con los id en el estado (modificando el vacío)

        this.setState({
          characterList: characterListWithId,
          filteredList: characterListWithId,
        }, this.saveDataLocalStorage(characterListWithId));
      });
  };

  //Guardo datos de API en Local Storage

  saveDataLocalStorage(list) {
    localStorage.setItem('harry-potter-list', JSON.stringify(list));
  };

  //Pongo el valor del value del input en el estado de la madre. 
  //En el callback filtro el array completo de personajes para que me devuelva solo aquellos cuyo nombre incluya las letras que ha escrito el usuario, es decir, las del value.

  handleLetterChange(event) {
    this.setState(
      {
        valueName: event.currentTarget.value
      }, this.filterCharacters
    );
  };

  //Pongo el valor del value del select en el estado de la madre. 
  //En el callback filtro el array completo de personajes para que me devuelva solo los que están muertos.

  handleSelect(event) {
    this.setState(
      {
        valueLife: event.currentTarget.value
      }, this.filterByLife
    );
  };

  //Funciones de filtrado

  filterCharacters() {
    arrayCharacters = this.state.characterList.filter((character) =>
      character.name.toUpperCase().includes(this.state.valueName.toUpperCase()));
    this.setState({
      filteredListName: arrayCharacters,
    }, this.compareLists(arrayCharacters)
    );
  }

  filterByLife() {
    arrayLife = this.state.characterList.filter((character) => {
      if (character.alive === true && this.state.valueLife === "Vivo") {
        return true;
      } else if (character.alive === false && this.state.valueLife === "Muerto") {
        return true;
      } else if (this.state.valueLife === "Todos") {
        return true;
      } else {
        return false;
      };
    });
    this.setState({
      filteredListLife: arrayLife,
    }, this.compareLists());
  };

  compareLists() {
    const {
      valueName,
      valueLife,
    } = this.state;
    if (valueName && valueLife) {
      const doubleFilter = [];
      arrayCharacters.forEach((characterL1) =>
        arrayLife.forEach((characterL2) => {
          if (characterL1 === characterL2) {
            doubleFilter.push(characterL1)
          }
        }
        )
      );
      this.setState({
        doubleFilter: doubleFilter,
      });
    };
  };

  // Selecciono el array que voy a enviar a CharacterList para que lo imprima

  filterResults() {
    const {
      characterList,
      filteredListName,
      filteredListLife,
      valueName,
      valueLife,
      doubleFilter
    } = this.state;
    if (valueName && !valueLife) {
      return filteredListName
    } else if (!valueName && valueLife) {
      return filteredListLife
    } else if (valueName && valueLife) {
      return doubleFilter
    } else if (!valueName && !valueLife) {
      return characterList
    }
  };

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
                valueInput={this.state.valueName}
                handleSelect={this.handleSelect}
              />
              : <Loading />
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
  };
};

export default App;
