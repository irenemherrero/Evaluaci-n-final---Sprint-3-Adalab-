import React, { Component, Fragment } from 'react';
import '../styles/CharacterCard.css';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { 
            house, 
            name, 
            photo,
        } = this.props;
        return (
            <Fragment>
                <div className="PhotoContainer">
                    <img 
                        className="ImageCharacter" 
                        src={photo} 
                        alt={name} 
                    />
                </div>
                <div className="DataCharacterBox">
                    <p className="magicParagraph">{name}</p>
                    <p className="magicParagraph">{house}</p>
                </div>
            </Fragment>
        );
    };
};

CharacterCard.propTypes = {
    house: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
}

export default CharacterCard;