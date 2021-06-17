import React from "react";
import "../styles/hero.scss";
import homepageHero from "../images/hero_home.png";
import aboutHero from "../images/hero_about.png";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.page = this.props.page;
  }
  render() {
    return (
      <div className={`hero__wrapper ${this.page}`}>
        <img
          src={this.page === "homepage" ? homepageHero : aboutHero}
          alt=""
          className="hero_image"
        ></img>
        <div className="hero__img__layer"></div>
        <h1 className={`${this.page}__headline`}>
          Home anywhere and everywhere
        </h1>
      </div>
    );
  }
}

export default Hero;
