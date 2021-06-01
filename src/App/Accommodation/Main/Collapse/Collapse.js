import React from "react";
import "./Collapse.scss";
import arrow from "./arrow-mobile.svg";

class Collapse extends React.Component {
  render() {
    const renderBody = () => {
      if (typeof this.props.content === "string") {
        return <p className="body__description">{this.props.content}</p>;
      } else {
        this.props.content.map((item, index) => {
          console.log(item);
          return <p className="body__amenities">{item}</p>;
        });
      }
    };

    return (
      <div className="collapse__item">
        <div className="collapse__item--title">
          <p>{this.props.title}</p>
          <img src={arrow} alt="" className="collapse__item--arrow"></img>
        </div>
        <div className="collapse__item--body">{renderBody()}</div>
      </div>
    );
  }
}

export default Collapse;

// why does this not work
// {typeof this.props.content === "Array" ? this.props.content.map((item, index) => { return (<div>Array</div>)}) : return <div>Body</div> }
