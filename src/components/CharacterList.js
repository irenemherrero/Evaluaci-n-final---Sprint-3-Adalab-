import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        }
    }

    componentDidMount(){
        fetch('http://hp-api.herokuapp.com/api/characters ')
            .then(response => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                this.setState({ characterList: json })
            })
        }
    
    render() {
        return (
            <ul className="CharacterList">
                <CharacterCard />
               {/*} {characterList.map(function (character) {
                    return (
                <li key={pokemon.id}>
                    <PokemonCard className="PokemonCard"
                        evolution={pokemon.evolution}
                        id={pokemon.id}
                        name={pokemon.name} 
                        image={pokemon.url} 
                        types={pokemon.types}
                        url={pokemon.url}
                    />
                </li>)
            })
                }*/}
            </ul>
        );
    }
}

export default CharacterList;