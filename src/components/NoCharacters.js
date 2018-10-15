import React, { Component } from 'react';
import NoCharacterFound from '../images/no_character_found.gif';
class NoCharacters extends Component {
    render() { 
        const {valueInput} = this.props;
        return ( 
            <div className="noCharacterContainer">
                <img className="noCharacterGif"src={NoCharacterFound} alt="No character found"/>
                <p className="noCharacterMessage">¿¿¿Qué??? No hay ningún personaje con el nombre "{valueInput}".</p>
            </div>
         );
    }
}
 
export default NoCharacters;