import "../styles/home.scss";
import Hero from "../components/Hero";
import Main from "./Home_main";
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
