import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Header />
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/reservations"}>Reservations</Link>
        </li>
        <li>
          <Link to={"/order-online"}>Order Online</Link>
        </li>
        <li>
          <Link to={"/login"}>login</Link>
        </li>
      </ul>
    </nav>
  );
}
