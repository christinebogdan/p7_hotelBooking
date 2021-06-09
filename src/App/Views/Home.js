import "../Styles/Home.scss";
import Hero from "../Components/Hero";
import Main from "./Home_Main";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Main />
      </div>
    );
  }
}

export default Home;
