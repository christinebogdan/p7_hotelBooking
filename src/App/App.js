// import logo from "./logo.svg";
import "./styles/app.scss";
import Nav from "./components/nav";
import Home from "./views/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Accommodation from "./views/accommodation";
import About from "./views/about";
import NotFound from "./views/notFound";

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
