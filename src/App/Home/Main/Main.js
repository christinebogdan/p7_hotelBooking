import "./Main.scss";
import Card from "./Card/Card";
import json from "../../../data.json";
import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main>
        <ul className="home__main">
          {json.map((accommodation, index) => (
            // do I have to set the key here? Does not show up in the markup
            <Card
              title={accommodation.title}
              cover={accommodation.cover}
              // is it better to use the index of the array in the json or the
              // element id property in each accommodation object?
              id={index}
              // id={accommodation.id}
              key={index}
              // key={accommodation.id}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default Main;
