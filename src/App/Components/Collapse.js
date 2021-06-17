import React from "react";
import "../styles/collapse.scss";
import arrow from "../images/arrow-mobile.svg";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.title = this.props.title;
    this.page = this.props.page;
  }

  toggleCollapse = (e) => {
    this.setState(this.state.open === false ? { open: true } : { open: false });
  };

  render() {
    const renderBody = () => {
      if (typeof this.props.content === "string") {
        return (
          <p className={`body__description ${this.page}__description`}>
            {this.props.content}
          </p>
        );
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
        <div
          className={`collapse__item--title ${this.page}__title`}
          onClick={this.toggleCollapse}
        >
          <p>{this.title}</p>
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
