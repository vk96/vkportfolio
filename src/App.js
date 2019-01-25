import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ position: "relative" }}>
          <Home />
        </div>
        <About />
        <Service />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    );
  }
}
