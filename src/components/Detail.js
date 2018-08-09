import React, { Component, Fragment } from 'react';
import ButtonBack from './ButtonBack';

class Detail extends Component {
    constructor(props){
        super(props)

        // this.aliveOrNot = this.aliveOrNot.bind(this)
    }
    
    // aliveOrNot(){
    //     const { alive } = this.props.characterToPrint;
    //     return alive === true
    //       ? "Vivo"
    //       : "Muerto"
    // }

    render() { 
        console.log(this.props);
        const { characterList } = this.props;
        const {id} = this.props.match.params;
        const characterToPrint = characterList[id];
        console.log(characterToPrint);
        
        return ( 
            <Fragment>
                <img src={characterToPrint.image} alt={characterToPrint.name}/>
                <h1 className="CharacterName"> {characterToPrint.name}</h1>
                <h2 className="CharacterHouse">Casa:{characterToPrint.house}</h2>
                <h2 className="CharacterBirth">Nacimiento: {characterToPrint.yearOfBirth}</h2>
                <h2 className="CharacterPatronus">Patronus: {characterToPrint.patronus}</h2>
                <h2 className="CharacterState">Estado: {characterList.alive}</h2>
                <ButtonBack />
            </Fragment>
         );
    }
}
 
export default Detail;