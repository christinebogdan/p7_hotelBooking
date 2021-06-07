import "./Home.scss";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import React from "react";

class Home extends React.Component {
  render() {
    console.log("Home is loaded");
    return (
      <div className="home">
        <Hero />
        <Main />
      </div>
    );
  }
}

export default Home;
