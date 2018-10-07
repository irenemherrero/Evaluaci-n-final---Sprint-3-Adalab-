import React, { Component } from 'react';
import LoadingSnitch from '../images/loading_snitch.gif';
import '../styles/Loading.css';

class Loading extends Component {
    render() { 
        return ( 
            <div className = "loadingCointainer">
                <img src={LoadingSnitch} alt="Loading Snitch"/>
            </div>
         );
    }
}
 
export default Loading;