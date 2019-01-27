import React, { Component } from "react";
// react scroll
import { Element } from "react-scroll";
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
        <Element name="home">
          <div style={{ position: "relative" }}>
            <Home />
          </div>
        </Element>
        <Element name="about">
          <About />
        </Element>

        <Element name="service">
          <Service />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>

        <Footer />
      </div>
    );
  }
}
