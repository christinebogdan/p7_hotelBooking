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

  // cannot use normal function because every new functiond efines its own this value?
  nextImage = () => {
    this.setState(
      // why did this not work with this.sliderLength
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
          className="arrow-left"
          onClick={this.prevImage}
        ></img>
        <img
          src={arrowRight}
          alt="arrow-right"
          className="arrow-right"
          onClick={this.nextImage}
        ></img>
        {this.images.map((image, index) => {
          return (
            // gibt es noch eine andere Möglichkeit als so? Oder liegt das daran,
            // dass alles komplett neu gerendert wird?
            // Wird alles komplett neu gerendert, wenn sich der state ändert?
            // Warum wird alles neu gerendert? Weil der state überall genutzt wird?
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

// why did a {" "} appear above the map?

export default Gallery;
