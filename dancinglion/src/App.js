import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar'
import MainContent from './components/jumbotron'

var del1 = "heja"
var del2 = "Mirja"
var del3 = "Seja"
var del4 = "Pia"
var del5 = "Maria"
var del6 = "Annie"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContent text={del1} />
        <MainContent text={del2} />
        <MainContent text={del3} />
        <MainContent text={del4} />
        <MainContent text={del5} />
        <MainContent text={del6} />
      </div>
    );
  }
}

export default App;
