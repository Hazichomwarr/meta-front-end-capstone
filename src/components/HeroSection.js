import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../icons_assets/restauranfood.jpg";
import restaurantImag from "../icons_assets/restaurant.jpg";
import Testimonials from "./Testimonials";

export default function HeroSection() {
  return (
    <>
      <section id="main-hero">
        <div className="card">
          <header>
            <h3 className="title title-hero">Little Lemon</h3>
            <span className="title-lieu">Chicago</span>
          </header>
          <p className="text text-hero">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link role={"button"} to={"/reservations"} className="button">
            Reserve a Table
          </Link>
        </div>
        <div className="cardImage-box">
          <img className="imag" src={cardImage} alt="food" />
          <img className="imag" src={restaurantImag} alt="restaurant" />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
