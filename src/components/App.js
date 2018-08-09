import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
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
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => {
        return response.json();
      })
      .then((json) => {
        const characterList = [];

        for(let i=0; i<json.length; i++){
          characterList[i]= {
            ...json[i],
            id:i
          }
        }
        this.setState({
          characterList: characterList,
          filteredList: characterList,
        })
        console.log(this.state.characterList);
          })
  }

  filterResults() {
    const { characterList, value, filteredList } = this.state;
    return !value
      ? characterList
      : filteredList
  }

  handleLetterChange(event) {
    this.setState(
      {
        value: event.currentTarget.value
      },
      () => {
        const arrayFiltered = this.state.characterList.filter((character) =>
          character.name.includes(this.state.value));
        console.log('che', arrayFiltered);
        this.setState({ filteredList: arrayFiltered })
      }
    );
  }


  render() {
    console.log(this.state.value);
    return (
      <Switch>
      <Route
        exact path='/'
        render={ () => 
          <CharacterList
          characterListToPrint={this.filterResults}
          handleLetterChange={this.handleLetterChange}
          valueInput={this.state.value}
          />
        }
      />
     <Route 
        path='/character/:id'
        render={ props => 
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
