import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonBack extends Component {

    render() { 
        return ( 
            <button><Link to="/">Vuelve atrás con tu Ninbus</Link></button>
         );
    }
}
 
export default ButtonBack;