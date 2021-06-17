import "../styles/home_main.scss";
import Card from "../components/Card";
import json from "../../data.json";
import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main>
        <ul className="home__main">
          {json.map((accommodation, index) => (
            <Card
              type="card"
              title={accommodation.title}
              cover={accommodation.cover}
              id={accommodation.id}
              key={index}
            />
          ))}
          {json.length % 3 !== 0 ? (
            <Card
              type="placeholder"
              title=""
              cover=""
              id=""
              key={json.length}
            />
          ) : null}
        </ul>
      </main>
    );
  }
}

export default Main;
