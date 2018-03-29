import React, { Component } from 'react';
import MainContent from '../jumbotron';
import ContentMain from '../contentMain';
import CardDes from '../card';

//Reactstrap
import { CardDeck } from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <MainContent text={ContentMain.del1} />
        <MainContent text={ContentMain.del2} />
        <MainContent text={ContentMain.del3} />
        <MainContent text={ContentMain.del4} />
        <MainContent text={ContentMain.del5} />
        <MainContent text={ContentMain.del6} />

        <CardDeck>
          <CardDes />
          <CardDes />
          <CardDes />
        </CardDeck>
      </div>

    );
  }
}

export default Main;
