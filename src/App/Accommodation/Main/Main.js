import React from "react";
import "./Main.scss";
import Tag from "./Tag/Tag";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="main">This is the Main part</div>
        <Tag />
      </div>
    );
  }
}

export default Main;
