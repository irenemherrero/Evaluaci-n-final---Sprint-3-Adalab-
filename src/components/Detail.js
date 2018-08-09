import React, { Component, Fragment } from 'react';
import ButtonBack from './ButtonBack';

class Detail extends Component {

    render() { 
        console.log(this.props);
        const { characterList } = this.props;
        const {id} = this.props.match.params;
        const characterToPrint = characterList[id];
        console.log(characterToPrint);
        const {image, name, house, yearOfBirth, patronus, alive} = characterToPrint;
        return ( 
            <Fragment>
                <img src={image} alt={name}/>
                <h1 className="CharacterName"> {name}</h1>
                <h2 className="CharacterHouse">Casa: {house}</h2>
                <h2 className="CharacterBirth">Nacimiento: {yearOfBirth}</h2>
                <h2 className="CharacterPatronus">Patronus: {patronus}</h2>
                <h2 className="CharacterState">Estado: {alive ? "Vivo" : "Muerto"}</h2>
                <ButtonBack />
            </Fragment>
         );
    }
}
 
export default Detail;