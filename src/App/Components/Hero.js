// import image from "./IMGhero.png";
import React from "react";
import "../Styles/Hero.scss";

// do I need to set h1 with z-index or is there
// another way to place above the layer?

// how can I concatenate className with prop and string?

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.context = this.props.context;
  }
  render() {
    return (
      <div className={`${this.context}`}>
        {/* <div className=`${this.context}__img__layer`></div> */}
        <h1 className="homepage__headline">Home anywhere and everywhere</h1>
      </div>
    );
  }
}

// class Hero extends React.Component {
//   constructor(props) {
//     super(props);
//     this.context = this.props.context;
//   }
//   render() {
//     return (
//       <div className="hero">
//         <div className="hero__img__layer"></div>
//         <h1 className="hero__headline">Home anywhere and everywhere</h1>
//       </div>
//     );
//   }
// }

export default Hero;

// {
//   `/accommodations/${this.id}`;
// }
