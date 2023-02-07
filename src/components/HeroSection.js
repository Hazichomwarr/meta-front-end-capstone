import React from "react";
import cardImage from "../icons_assets/restauranfood.jpg";

export default function HeroSection() {
  return (
    <section id="main-hero">
      <div className="card">
        <header>
          <h3 className="title">Little Lemon</h3>
          <span>Chicago</span>
        </header>
        <p className="text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="button">Reserve a Table</button>
      </div>
      <div className="cardImage-box">
        <img className="imag" src={cardImage} alt="food" />
      </div>
    </section>
  );
}
