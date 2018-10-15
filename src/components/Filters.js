import React, { Component } from "react";
import PropTypes from "prop-types";

class Filters extends Component {
    render() {
        const { 
            valueInput, 
            handleLetterChange, 
            handleSelect 
        } = this.props;
        return (
            <div className="BoxInput">
                <input className="Input"
                    value={valueInput}
                    placeholder="Filtra personajes por nombre..."
                    onChange={handleLetterChange}
                />
                <select className="selectLife" name="" id="" onChange={handleSelect}>
                    <option value="Todos" defaultChecked>Selecciona un estado</option>
                    <option value="Todos">Todos</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Muerto">Muerto</option>
                </select>
            </div>
        );
    };
};

Filters.propTypes = {
    valueInput: PropTypes.string,
    handleLetterChange: PropTypes.func
};

export default Filters;
