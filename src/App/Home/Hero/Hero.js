// import image from "./IMGhero.png";
import React from "react";
import "./Hero.scss";

// do I need to set h1 with z-index or is there
// another way to place above the layer?
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__img__layer"></div>
        <h1 className="hero__headline">Home anywhere and everywhere</h1>
      </div>
    );
  }
}

export default Hero;
