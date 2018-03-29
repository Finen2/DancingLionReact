import React, { Component } from 'react';
import Navbar from './components/navbar'
import MainContent from './components/jumbotron'
import ContentMain from './components/contentMain'

import Routing from './routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={navbarMargin}>
          <Routing />
        </div>
      </div>
    );
  }
}

export default App;

var navbarMargin = {
  'padding-top': '5em'
}
