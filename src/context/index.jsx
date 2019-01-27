import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    skillsAni: false
  };
  activeSkill = () => {
    if (this.state.skillsAni === false) {
      this.setState(() => {
        return { skillsAni: true };
      });
    }
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          activeSkill: this.activeSkill
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
