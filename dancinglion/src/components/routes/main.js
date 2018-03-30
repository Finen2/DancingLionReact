import React, {Component} from "react";
import MainContent from "../jumbotron";
import ContentMain from "../contentMain";
import CardDes from "../card";
import Img from "../../assets/img/images";

//Reactstrap
import {CardDeck} from "reactstrap";

class Main extends Component {
	render() {
		return (<div>
			<MainContent text={ContentMain.del1} jumboStyle={jumboStyleMain}/>
			<MainContent text={ContentMain.del2} jumboStyle={jumboStyle1}/>
			<MainContent text={ContentMain.del3} jumboStyle={jumboStyleMain}/>
			<MainContent text={ContentMain.del4} jumboStyle={jumboStyle1}/>
			<MainContent text={ContentMain.del5} jumboStyle={jumboStyleMain}/>
			<MainContent text={ContentMain.del6} jumboStyle={jumboStyle1}/>

			<CardDeck>
				<CardDes/>
				<CardDes/>
				<CardDes/>
			</CardDeck>
		</div>);
	}
}

export default Main;

var jumboStyleMain = {
	"height": "100vh",
	"background-image": Img.bg,
	"background-repeat": "no-repeat",
	"background-attachment": "fixed",
	"color": "#fff",
	"background-size": "cover"
};

var jumboStyle1 = {
	"height": "50vh",
	"background": "#fff",
	"background-repeat": "no-repeat",
	"background-attachment": "fixed",
	"color": "#000",
	"background-size": "cover"
};

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
