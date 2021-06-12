import "../styles/nav.scss";
import logo from "../images/LOGO_nav.svg";
import { Link } from "react-router-dom";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"></img>
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <Link to="/" className="nav__item--li">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__item--li">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
//
