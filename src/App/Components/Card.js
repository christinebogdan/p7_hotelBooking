import React from "react";
import "../Styles/Card.scss";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      // where do I need to set the key? Here or in Main?
      <li className="card">
        <Link to={`/accommodations/${this.props.id}`} className="card__link">
          <div className="card__wrap">
            <img src={this.props.cover} alt="" className="card__img"></img>
            <div className="card__layer"></div>
            <h2 className="card__title">{this.props.title}</h2>
          </div>
        </Link>
      </li>
    );
  }
}

export default Card;
