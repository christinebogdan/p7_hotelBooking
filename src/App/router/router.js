import Nav from "../components/Nav";
import Home from "../views/Home";
import Footer from "../components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Accommodation from "../views/Accommodation";
import About from "../views/About";
import NotFound from "../views/NotFound";

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/accommodations/:id", component: Accommodation },
  { path: "/about", component: About },
  { path: "/404", component: NotFound },
  { path: "*", component: NotFound },
];

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="renderedPage">
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                exact={route.exact ?? false}
                component={route.component}
              ></Route>
            ))}
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
