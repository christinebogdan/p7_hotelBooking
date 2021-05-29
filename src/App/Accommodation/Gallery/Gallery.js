import React from "react";
import "./Gallery.scss";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div>{this.props.id}</div>
      </div>
    );
  }
}

export default Gallery;
