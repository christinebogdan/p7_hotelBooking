import "./Nav.scss";
import logo from "./LOGO.svg";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="header">
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
    </div>
  );
}
