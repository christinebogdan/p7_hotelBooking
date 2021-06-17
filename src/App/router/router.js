import Home from "../views/Home";
import { Switch, Route } from "react-router-dom";
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
    );
  }
}

export default Router;
