import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    skillsAni: false,
    navAbout: false,
    navService:false,
    
  };
  activeSkill = () => {
    if (this.state.skillsAni === false) {
      this.setState(() => {
        return { skillsAni: true };
      });
    }
  };
  activeNavbar = element => {
    console.log("navbar active", element);
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          activeSkill: this.activeSkill,
          activeNavbar: this.activeNavbar
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
