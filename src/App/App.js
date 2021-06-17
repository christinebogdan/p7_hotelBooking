// import logo from "./logo.svg";
import "./styles/app.scss";
import React from "react";
import Router from "./router/Router";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router />
      </div>
    );
  }
}

export default App;
