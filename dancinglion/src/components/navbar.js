import React from "react";
import { Collapse, Navbar, Button, NavbarBrand } from "reactstrap";

import ModalLogin from "./modalLogin";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-5em";
	}
	prevScrollpos = currentScrollPos;
};

export default class NavbarTop extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<div>
				<Navbar id="navbar" style={navbarStyle} color="light fixed-top" light>
					<NavbarBrand href="/" className="mr-auto">Dancing Lion</NavbarBrand>
					<ModalLogin buttonLabel="Login" />
				</Navbar>
			</div>
		);
	}
}

var navbarStyle = {
	color: "white",
	transition: "top 0.4s",
	"height": "5em"
};
/*
<li><Link to='/'>Main</Link></li>
<li><Link to='/student'>Student</Link></li>
*/
