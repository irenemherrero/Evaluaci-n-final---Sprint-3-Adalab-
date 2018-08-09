import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList.js';
import CharacterCard from './CharacterCard.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        characterList: [],
        filteredList: [],
        value: '',
    }
    this.handleLetterChange=this.handleLetterChange.bind(this)
    // this.filterResults=this.filterResults.bind(this)
    this.filterByLetters=this.filterByLetters.bind(this)
}

componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({ 
              characterList: json,
              filteredList: json,
             })
        })
}

filterByLetters() {
  console.log('holi')
  const arrayFiltered = this.state.characterList.filter((character) => 
  character.name.includes(this.state.value));
  console.log('che', arrayFiltered);
  this.setState({filteredList: arrayFiltered})


}

// filterResults(){
//   const { characterList, value } = this.state;

//   return !value
//     ? characterList
//     : this.filterByLetters();
// }

handleLetterChange(event){
  this.setState({
    value: event.currentTarget.value,
  },() => {
    console.log(this.state.value);});
this.filterByLetters();
}

  render() {
    console.log(this.state.value);
    return (
      <section>
      <CharacterList 
        characterList={this.state.characterList}
        filteredList={this.state.filteredList}
        handleLetterChange={this.handleLetterChange}
        valueInput={this.state.value}
      />
      <CharacterCard/>
      
    {/*<Switch>
      <Route
        exact path='/'
        render={ props => 
          <CharacterList
            // match={props.match}
            // peopleList={peopleList}
          />
        }
      />
      <Route 
        path='/z' 
        render={ props => 
          <CharacterCard 
            // match={props.match} 
            // peopleList= {peopleList}
            />
        }
      /> 
      </Switch>*/}
    </section>
    );
  }
}

export default App;
