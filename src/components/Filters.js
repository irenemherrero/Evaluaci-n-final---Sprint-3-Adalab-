import React, { Component, Fragment } from 'react';
import '../styles/Filters.css';
class Filters extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        console.log(this.props.valueInput);
        const {valueInput} = this.props;
        return ( 
            <input value={valueInput} placeholder="Ej. Harry Potter" onChange={this.props.handleLetterChange}/> 

         );
    }
}
 
export default Filters;