import React from "react";
import "../styles/notFound.scss";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound__wrapper">
        <p className="notFound__title">404</p>
        <p className="notFound__body">
          Oops! It looks like this page doesn't exist.
        </p>
        <Link to="/" className="notFound__link">
          Go back to home page
        </Link>
      </div>
    );
  }
}

export default NotFound;
