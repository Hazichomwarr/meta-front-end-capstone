import React from "react";
import brandImage from "../Little-Lemon-logos/Asset16@4x.png";

export default function Header() {
  return (
    <header>
      <img className="logo-image" src={brandImage} alt="logo" />
    </header>
  );
}
