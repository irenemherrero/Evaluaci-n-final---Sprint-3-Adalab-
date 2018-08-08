import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList.js';
import CharacterCard from './CharacterCard.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <section>
      <CharacterList/>
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
