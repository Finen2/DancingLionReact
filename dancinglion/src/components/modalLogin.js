/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

class ModalLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const externalCloseBtn = <button className="close" style={{ position: "absolute", top: "15px", right: "15px" }} onClick={this.toggle}>&times;</button>;
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
					<ModalHeader>Login</ModalHeader>
					<ModalBody>
						<Button color="warning" onClick={this.toggle} style={buttonStyling}><Link to='/' style={textButton}>Homepage</Link></Button>
						<Button color="warning" onClick={this.toggle} style={buttonStyling}><Link to='/student'style={textButton}>Student</Link></Button>
						<Button color="warning" onClick={this.toggle} style={buttonStyling}><Link to='/teacher'style={textButton}>Teacher</Link></Button>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalLogin;

var textButton = {
	"color": "#fff"
};

var buttonStyling = {
	"margin": "0 0.25em"
};
