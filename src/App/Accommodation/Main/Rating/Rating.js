import "./Rating.scss";
import React from "react";
import starRed from "../starred.svg";
import starGrey from "../stargrey.svg";

class Rating extends React.Component {
  constructor(props) {
    // do I need constructor here? Whenever I want to
    // define variable outside the render method?
    super(props);
    this.rating = this.props.rating;
    this.range = this.props.range;
  }

  // why is let a reserved word?

  render() {
    // why does this not work?
    // const range = Array(this.range).fill(0);
    // why does the following not work with new?
    // const range = new Array.from(Array(5).keys());
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

// what is this.handleChange = this.handleChange.bind(this)
