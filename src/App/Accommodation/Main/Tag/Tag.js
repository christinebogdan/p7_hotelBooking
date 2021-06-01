import "./Tag.scss";
import React from "react";

class Tag extends React.Component {
  render() {
    return (
      <>
        {this.props.tags.map((tag, index) => {
          return (
            <span className="tag" key={index}>
              {tag}
            </span>
          );
        })}
      </>
    );
  }
}

export default Tag;
