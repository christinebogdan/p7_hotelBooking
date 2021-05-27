import "./Footer.scss";
import logo from "./Logo_white.svg";

export function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer__logo"></img>
      <p className="footer__text">© 2020 Kasa. All rights reserved. </p>
    </div>
  );
}
