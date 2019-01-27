import React from "react";
// bootstrap comp
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import classnames from "classnames";
// context api
import { Consumer } from "../context";

class Header extends React.Component {
  state = {
    isOpen: false,
    styleHeader: false
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      this.setState({
        styleHeader: true
      });
      this.props.activeSkill();
    } else {
      this.setState({
        styleHeader: false
      });
    }
    // this.props.activeSkill;
  };

  render() {
    const { isOpen, styleHeader } = this.state;
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
        className={classnames("my-navbar", { active: styleHeader })}
      >
        <Container>
          <NavbarBrand
            className="my-brand"
            style={{ color: "#fff", fontSize: 22 }}
            href="/"
          >
            VL
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}>
            <i className="fas fa-bars" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="float-right" navbar>
              <NavItem className="nav-item">home</NavItem>
              <NavItem className="nav-item">about</NavItem>
              <NavItem className="nav-item">service</NavItem>
              <NavItem className="nav-item">contect</NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default props => (
  <Consumer>
    {({ activeSkill }) => <Header {...props} activeSkill={activeSkill} />}
  </Consumer>
);
