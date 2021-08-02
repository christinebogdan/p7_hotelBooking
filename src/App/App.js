// import logo from "./logo.svg";
import "./styles/app.scss";
import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Nav />
          <div className="renderedPage">
            <Router />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
