import React from "react";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/acc_main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.accommodation = this.props.accommodation;
    this.rating = this.accommodation?.rating;
    this.range = this.props.range;
    this.tags = this.accommodation?.tags;
    this.description = this.accommodation?.description;
    this.amenities = this.accommodation?.Amenities;
    this.title = this.accommodation?.title;
    this.location = this.accommodation?.location;
    this.name = this.accommodation?.host?.name;
    this.picture = this.accommodation?.host?.picture;
  }
  render() {
    return (
      <main>
        <div className="intro">
          <div className="intro__header">
            <h1 className="intro__header--title">{this.title}</h1>
            <p className="intro__header--location">{this.location}</p>
            <div className="intro__header--tags">
              <Tag tags={this.tags} />
            </div>
          </div>
          <div className="intro__profile">
            <div className="intro__host">
              <p className="intro__host--name">{this.name}</p>
              <div className="intro__host--picture">
                <img src={this.picture} alt=""></img>
              </div>
            </div>
            <div className="intro__rating">
              <Rating rating={this.rating} range={this.range} />
            </div>
          </div>
        </div>
        <div className="collapse">
          <Collapse
            title="Description"
            content={this.description}
            page="accommodation"
          />
          <Collapse
            title="Amenities"
            content={this.amenities}
            page="accommodation"
          />
        </div>
      </main>
    );
  }
}

export default Main;
