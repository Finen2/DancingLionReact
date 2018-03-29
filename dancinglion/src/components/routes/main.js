import React, { Component } from 'react';
import MainContent from '../jumbotron';
import ContentMain from '../contentMain';
import CardDes from '../card';
import Img from '../../assets/img/images'

//Reactstrap
import { CardDeck } from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <div>
        <MainContent text={ContentMain.del1} jumboStyle={jumboStyleMain} />
        <MainContent text={ContentMain.del2} jumboStyle={jumboStyleMain} />
        <MainContent text={ContentMain.del3} jumboStyle={jumboStyleMain} />
        <MainContent text={ContentMain.del4} jumboStyle={jumboStyleMain} />
        <MainContent text={ContentMain.del5} jumboStyle={jumboStyleMain} />
        <MainContent text={ContentMain.del6} jumboStyle={jumboStyleMain} />

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

var jumboStyleMain = {
  'height': '100vh',
  'background-image': Img.bg,
  'background-repeat': 'no-repeat',
  'background-attachment': 'fixed',
  'color': '#fff'
}

var jumboStyle1 = {
  'color': 'red'
}

/*
class Parent extends React.Component {
render () {
return(
 <Child eyeColor={'blue'} />
)
}
}
class Child extends React.Component {
render () {
return(
 <div style={{backgroundColor: this.props.eyeColor} />
)
}
}
*/
