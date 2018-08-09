import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import { Link } from 'react-router-dom';
import '../styles/CharacterList.css';
import PropTypes from 'prop-types';

class CharacterList extends Component {

    render() {
        console.log(this.props);
        const { handleLetterChange, valueInput, characterListToPrint } = this.props;
        console.log('LISTA', characterListToPrint);
        return (
            <Fragment>
                <h1 className="WebTitle">Harry Potter Characters</h1>
                <Filters
                    handleLetterChange={handleLetterChange}
                    valueInput={valueInput} />
                <ul className="CharacterList">
                    {characterListToPrint().map((character, index) => {
                        return (
                            <Link className="LinkCard" to={`/character/${character.id}`}><li key={index} className="CharacterCard">

                                <CharacterCard
                                    photo={character.image}
                                    name={character.name}
                                    house={character.house || "Sin casa"}
                                />
                            </li>
                            </Link>)
                    })
                    }
                </ul>
            </Fragment>)
    }
}

CharacterList.propTypes = {
    characterListToPrint: PropTypes.func,
    handleLetterChange: PropTypes.func,
    valueInput: PropTypes.string,
}
export default CharacterList;