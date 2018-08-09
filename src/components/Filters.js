import React, { Component } from "react";
import "../styles/Filters.css";
import PropTypes from "prop-types";

class Filters extends Component {
    render() {
        console.log(this.props);
        const { valueInput, handleLetterChange } = this.props;
        return (
            <div className="BoxInput">
                <input
                    value={valueInput}
                    placeholder="Ej. Harry Potter"
                    onChange={handleLetterChange}
                />
            </div>
        );
    }
}

Filters.propTypes = {
    valueInput: PropTypes.string,
    handleLetterChange: PropTypes.func
};

export default Filters;
