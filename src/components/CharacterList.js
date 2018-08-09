import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import '../styles/CharacterList.css';

class CharacterList extends Component {

    render() {
        console.log(this.props);
        const { handleLetterChange, valueInput, characterListToPrint } = this.props;
        console.log('LISTA', characterListToPrint);
        return(
        <Fragment>
                <h1>Harry Potter Characters</h1>
                <Filters 
                handleLetterChange={handleLetterChange}
                valueInput={valueInput}/>
                <ul className="CharacterList">
                {characterListToPrint().map((character, index) => {
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
            </Fragment>)
    }
}

export default CharacterList;