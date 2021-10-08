import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import Print from './components/Print';


export default class App extends Component {

  render() {
    return (
      <>
        <Route
            exact path='/'
            render={props => <Form {...props}/>}
        />

        <Route
            exact path='/print'
            render={props => <Print {...props}/>}
        />

      </>
    )
  }
}

