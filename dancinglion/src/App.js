import React, { Component } from 'react';
import Navbar from './components/navbar'
import MainContent from './components/jumbotron'
import ContentMain from './components/contentMain'

import Header from './components/routes/header'
import Routing from './routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Header />
          <Routing />
        </div>
        <MainContent text={ContentMain.del1} />
        <MainContent text={ContentMain.del2} />
        <MainContent text={ContentMain.del3} />
        <MainContent text={ContentMain.del4} />
        <MainContent text={ContentMain.del5} />
        <MainContent text={ContentMain.del6} />
      </div>
    );
  }
}

export default App;
