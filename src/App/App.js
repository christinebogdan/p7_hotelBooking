// import logo from "./logo.svg";
import "./Styles/App.scss";
import Nav from "./Components/Nav";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Accommodation from "./Views/Accommodation";
import About from "./Views/About";
import NotFound from "./Views/NotFound";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Nav />
          <div className="renderedPage">
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
              <Route path="/404">
                <NotFound />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
