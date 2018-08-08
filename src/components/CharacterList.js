import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        }
    }

    componentDidMount() {
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
        console.log(this.state.characterList);
        const {characterList} = this.state;
        return (
            <ul className="CharacterList">
                {characterList.map((character, index) => {
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
        );
    }
}

export default CharacterList;