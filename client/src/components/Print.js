import React, { Component } from 'react';
import printJS from 'print-js';
import { Link } from 'react-router-dom';
// import './Form.css';



export default class Print extends Component {
    render() {
        return (
            <div>
                {printJS({printable: 'imprimir', type: 'html', css: 'Form.css'})}

                <Link to='/'>back</Link>
            </div>
        )
    }
}
