import React from "react";
// bootstrap comp
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";

export default class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar
        expand="md"
        style={{
          position: "fixed",
          width: "100%",
          background: "transparent",
          zIndex: 1,
          color: "#f3f3f3",
          fontSize: 18
        }}
      >
        <NavbarBrand style={{ color: "#fff", fontSize: 22 }} href="/">
          VL
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar}>
          <i className="fas fa-bars" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="nav-item">home</NavItem>
            <NavItem className="nav-item">about</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
