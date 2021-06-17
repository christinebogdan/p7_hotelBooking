import "../styles/rating.scss";
import React from "react";
import starRed from "../images/starred.svg";
import starGrey from "../images/stargrey.svg";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.props.rating;
    this.range = this.props.range;
  }

  render() {
    const range = Array.from(Array(5).keys());
    console.log(range);
    return (
      <>
        {range.map((count, index) => {
          return (
            <img
              src={index < this.rating ? starRed : starGrey}
              alt=""
              className="star"
              key={index}
            ></img>
          );
        })}
      </>
    );
  }
}

export default Rating;
