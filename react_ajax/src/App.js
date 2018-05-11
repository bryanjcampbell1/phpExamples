import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    $.ajax({
        type: "GET",
        url: 'hello.php',
        data: {name: 'Bryan'},
        success: function(data){
            alert(data);
        }
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }

}

export default App;
