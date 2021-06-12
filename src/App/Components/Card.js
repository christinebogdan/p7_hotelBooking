import React from "react";
import "../styles/card.scss";
import { Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.cover = this.props.cover;
    this.title = this.props.title;
  }
  render() {
    return (
      // where do I need to set the key? Here or in Main?
      <li className="card">
        <Link to={`/accommodations/${this.id}`} className="card__link">
          <div className="card__wrap">
            <img src={this.cover} alt="" className="card__img"></img>
            <div className="card__layer"></div>
            <h2 className="card__title">{this.title}</h2>
          </div>
        </Link>
      </li>
    );
  }
}

export default Card;
