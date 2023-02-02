import React from "react";
import Header from "./Header";
import brandImage from "../Little-Lemon-logos/Asset 16@4x.png";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Header />
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">login</a>
        </li>
      </ul>
    </nav>
  );
}
