// import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import React from "react";
import Accommodation from "./Accommodation/Accommodation";
import About from "./About/About";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/accommodations/:id">
            <Accommodation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
