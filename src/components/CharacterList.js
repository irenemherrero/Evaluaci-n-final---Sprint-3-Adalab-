import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import '../styles/CharacterList.css';

class CharacterList extends Component {
    constructor(props){
        super(props)

        this.getCorrectList=this.getCorrectList.bind(this)
    }

    getCorrectList() {
        const { characterList, filteredList } = this.props;
        // console.log(this.props.filteredList);
        return !filteredList
          ? characterList
          : filteredList;
      }

    render() {
        // console.log(this.props.characterList);
        const { handleLetterChange, valueInput } = this.props;
        return (
            <Fragment>
                <h1>Harry Potter Characters</h1>
                <Filters 
                handleLetterChange={handleLetterChange}
                valueInput={valueInput}/>
                <ul className="CharacterList">
                {this.getCorrectList().map((character, index) => {
                    return (
                        <li key={index} className="CharacterCard">
                            <CharacterCard
                                photo={character.image}
                                name={character.name}
                                house={character.house}
                            />
                        </li>)
                })
                }
            </ul>
            </Fragment>
        );
    }
}

export default CharacterList;