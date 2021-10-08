import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Form.css';

export default class Form extends Component {
    render() {
        return (
            <div>
                <form method='post' id='imprimir'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"/>

                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" id="age"/>

                    

                    <Link to='/print'>PRINT!</Link>
                </form>
            </div>
        )
    }
}
