import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#root")
);
