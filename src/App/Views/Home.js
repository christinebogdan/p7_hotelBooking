import "../styles/home.scss";
import Hero from "../components/hero";
import Main from "./home_main";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero page="homepage" />
        <Main />
      </div>
    );
  }
}

export default Home;
