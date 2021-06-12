// import image from "./IMGhero.png";
import React from "react";
import "../styles/hero.scss";

// do I need to set h1 with z-index or is there
// another way to place above the layer?

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.page = this.props.page;
  }
  render() {
    return (
      <div className={`hero__wrapper ${this.page}`}>
        <div className="hero__img__layer"></div>
        <h1 className={`${this.page}__headline`}>
          Home anywhere and everywhere
        </h1>
      </div>
    );
  }
}

export default Hero;
