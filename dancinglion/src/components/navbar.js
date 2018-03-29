import React from 'react';
import { Collapse, Navbar, Button, NavbarBrand } from 'reactstrap';

import ModalLogin from './modalLogin'

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
        <Navbar color="dark" light>
          <NavbarBrand href="/" className="mr-auto">Dancing Lion</NavbarBrand>
          <ModalLogin buttonLabel="Login" />
        </Navbar>
      </div>
    );
  }
}

/*
<li><Link to='/'>Main</Link></li>
<li><Link to='/student'>Student</Link></li>
*/
