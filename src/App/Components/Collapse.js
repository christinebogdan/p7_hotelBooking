import React from "react";
import "../Styles/Collapse.scss";
import arrow from "../Images/arrow-mobile.svg";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // why do I need arrow function?
  toggleCollapse = (e) => {
    // why do I wrap open:true in {}
    this.setState(this.state.open === false ? { open: true } : { open: false });
  };

  render() {
    const renderBody = () => {
      if (typeof this.props.content === "string") {
        return <p className="body__description">{this.props.content}</p>;
      } else {
        return (
          <ul>
            {this.props.content.map((item, index) => {
              return (
                <li className="body__amenities" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        );
      }
    };

    return (
      <div className="collapse__item">
        <div className="collapse__item--title" onClick={this.toggleCollapse}>
          <p>{this.props.title}</p>
          <img
            src={arrow}
            alt=""
            className={
              this.state.open === false
                ? "collapse__item--arrow-up"
                : "collapse__item--arrow-down"
            }
          ></img>
        </div>
        <div
          className={
            this.state.open === false ? "closed" : "collapse__item--body"
          }
        >
          {renderBody()}
        </div>
      </div>
    );
  }
}

export default Collapse;

// why does this not work
// {typeof this.props.content === "Array" ? this.props.content.map((item, index) => { return (<div>Array</div>)}) : return <div>Body</div> }

// why does it not work, when I put

//   else {
//  this.props.content.map((item, index) => {
//    return <p className="body__amenities">{item}</p>;
//  });
//  }
