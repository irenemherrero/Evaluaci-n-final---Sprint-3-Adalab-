import React, { Component, Fragment } from 'react';
import '../styles/CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
 
         }
    }
    render() { 
        console.log(this.props);
        const {house, name, photo}=this.props;
        return ( 
            <Fragment>
            <img className="ImageCharacter" src={photo} alt={name} />
            <p>{name}</p>
            <p>{house}</p>
            </Fragment>
         );
    }
}
 
export default CharacterCard;