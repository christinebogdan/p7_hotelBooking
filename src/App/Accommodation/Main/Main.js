import React from "react";
import Tag from "./Tag/Tag";
import json from "../../../data.json";
import Rating from "./Rating/Rating";
import Collapse from "./Collapse/Collapse";
import "./Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.rating = this.props.rating;
    this.range = this.props.range;
    this.tags = this.props.tags;
    this.description = this.props.description;
    this.amenities = this.props.amenities;
  }
  render() {
    return (
      <main>
        <div className="intro">
          <div className="intro__header">
            <h1 className="intro__header--title">{json[this.id].title}</h1>
            <p className="intro__header--location">{json[this.id].location}</p>
            <div className="intro__header--tags">
              <Tag tags={this.tags} />
            </div>
          </div>
          <div className="intro__profile">
            <div className="intro__host">
              <p className="intro__host--name">{json[this.id].host.name}</p>
              <div className="intro__host--picture">
                <img src={json[this.id].host.picture} alt=""></img>
              </div>
            </div>
            <div className="intro__rating">
              <Rating rating={this.rating} range={this.range} />
            </div>
          </div>
        </div>
        <div className="collapse">
          <Collapse title="Description" content={this.description} />
          <Collapse title="Amenities" content={this.amenities} />
        </div>
      </main>
    );
  }
}

export default Main;
