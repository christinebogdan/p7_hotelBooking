import React from "react";
import "../styles/gallery.scss";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.images = this.props.accommodation.pictures;
    this.sliderLength = this.images.length;
  }

  nextImage = () => {
    this.setState(
      this.state.current === this.images.length - 1
        ? { current: 0 }
        : { current: this.state.current + 1 }
    );
  };

  prevImage = () => {
    this.setState(
      this.state.current === 0
        ? { current: this.images.length - 1 }
        : { current: this.state.current - 1 }
    );
  };

  render() {
    return (
      <div className="gallery">
        <img
          src={arrowLeft}
          alt="arrow-left"
          className={this.sliderLength === 1 ? "inactive" : "arrow-left"}
          onClick={this.prevImage}
        ></img>
        <img
          src={arrowRight}
          alt="arrow-right"
          className={this.sliderLength === 1 ? "inactive" : "arrow-right"}
          onClick={this.nextImage}
        ></img>
        {this.images.map((image, index) => {
          return (
            <div
              className={
                this.state.current === index ? "is-active" : "inactive"
              }
              key={index}
            >
              <img src={image} alt="" className="gallery__image"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
