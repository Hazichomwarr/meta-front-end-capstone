import React from "react";
import cardImage from "../icons_assets/restauranfood.jpg";
import marioAdrian1 from "../icons_assets/Mario-Adrian.jpg";
import marioAdrian2 from "../icons_assets/Adrian-Mario.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="card">
        <header>
          <h3 className="title title-about">Little Lemon</h3>
          <span className="title-lieu">Chicago</span>
        </header>
        <p className="text text-about">
          Little Lemon opened in 1995 by two italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterraneen cuisine in Chicago, and were inspired to bring the
          flowers of their hometown Italy to the people of Chicago. The Two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </div>
      <div div className="cardImage-box">
        <img src={marioAdrian1} alt="owners" />
        <img src={marioAdrian2} alt="owners" />
      </div>
    </section>
  );
}
