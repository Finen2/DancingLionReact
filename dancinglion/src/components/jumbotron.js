import React from "react";
import { Jumbotron, Container } from "reactstrap";

class MainContent extends React.Component {
	render () {
		return (
			<div style={this.props.jumboStyle}>
				{this.props.text}
			</div>
		);
	}
}

export default MainContent;

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
