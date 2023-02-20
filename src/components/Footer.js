import React from "react";
import footerLogo from "../Little-Lemon-logos/Asset20@4x.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img className="footer-logo" src={footerLogo} alt="logo" />
      </div>
      <div className="footer-nav">
        <h2 className="subtitle">Navigation</h2>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/highlights">
          Menu
        </Link>
        <Link className="link" to="/reservations">
          Reservations
        </Link>
        <Link className="link" to="/order-online">
          Order
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
      <div className="footer-contact">
        <h2 className="subtitle">Contact</h2>
        <p className="footer-contact-address">
          2396 Maldove Way, Chicago Illinois
        </p>
        <p className="footer-contact-telephone">(029)-243-6827</p>
        <p className="footer-contact-email">info@littlelemon.com</p>
      </div>
      <div className="footer-connect">
        <h2 className="subtitle">Connect</h2>
        <Link className="link" to="https://facebook.com" target={"_blank"}>
          Facebook
        </Link>
        <Link className="link" to="https://instagram.com" target={"_blank"}>
          instagram
        </Link>
        <Link
          className="link"
          to="https://www.littlelemon.com"
          target={"_blank"}
        >
          Join us
        </Link>
      </div>
    </footer>
  );
}
