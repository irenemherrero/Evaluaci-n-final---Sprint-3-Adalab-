import React, { Component } from 'react';
import '../styles/Filters.css';

class Filters extends Component {
    render() { 
        console.log(this.props.valueInput);
        const {valueInput, handleLetterChange} = this.props;
        return ( 
            <input value={valueInput} placeholder="Ej. Harry Potter" onChange={handleLetterChange}/> 

         );
    }
}
 
export default Filters;