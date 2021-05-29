import "./Main.scss";
import Card from "./Card/Card";
import json from "../../../data.json";
import React from "react";

class Main extends React.Component {
  render() {
    return (
      <ul className="home__main">
        {json.map((accommodation) => (
          // do I have to set the key here? Does not show up in the markup
          <Card
            title={accommodation.title}
            cover={accommodation.cover}
            id={accommodation.id}
            key={accommodation.id}
          />
        ))}
      </ul>
    );
  }
}

export default Main;
