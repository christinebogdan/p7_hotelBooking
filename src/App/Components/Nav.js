import "../styles/nav.scss";
import logo from "../images/LOGO_nav.svg";
import { NavLink } from "react-router-dom";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"></img>
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <NavLink
                to="/"
                exact={true}
                className="nav__item--li"
                activeStyle={{ textDecoration: "underline" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__item--li"
                activeStyle={{ textDecoration: "underline" }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
