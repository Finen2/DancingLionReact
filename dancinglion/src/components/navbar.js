import React from 'react';
import { Collapse, Navbar, Button, NavbarBrand } from 'reactstrap';

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
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <Button color="danger">Danger</Button>
        </Navbar>
      </div>
    );
  }
}
