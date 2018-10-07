import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import { Link } from 'react-router-dom';
import '../styles/CharacterList.css';
import PropTypes from 'prop-types';

class CharacterList extends Component {
    render() {
        const { 
            handleLetterChange,
            valueInput, 
            characterListToPrint, 
            handleSelect 
        } = this.props;
        return (
            <Fragment>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="contentWeb">
                    <h1 className="WebTitle">Harry Potter Characters</h1>
                    <Filters
                        handleLetterChange={handleLetterChange}
                        valueInput={valueInput}
                        handleSelect={handleSelect} />
                    <ul className="CharacterList">
                        {characterListToPrint().map((character) => {
                            return (
                                <Link className="LinkCard" to={`/character/${character.id}`}><li key={character.id} className="CharacterCard" >
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
                </div>

            </Fragment>)
    }
}

CharacterList.propTypes = {
    characterListToPrint: PropTypes.func,
    handleLetterChange: PropTypes.func,
    valueInput: PropTypes.string,
}
export default CharacterList;