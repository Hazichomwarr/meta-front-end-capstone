import React from "react";
import greekSalad from "../icons_assets/greekSalad.jpg";
import lemonPie from "../icons_assets/lemon dessert.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";

export default function Highlights() {
  return (
    <section id="highlights">
      <header>
        <h3 className="sub-title">This weeks specials!</h3>
        <div>
          <button className="button">online Menu</button>
        </div>
      </header>
      <div className="cards-container">
        <div class="card-item">
          <img className="imag" src={greekSalad} alt="salad" />
          <div className="item-header-box">
            <h3>Greek salad</h3>
            <p class="price">$12.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <p>
            <button>Order a delivery </button>
          </p>
        </div>
        <div class="card-item">
          <img className="imag" src={bruchetta} alt="bruchetta" />
          <div className="item-header-box">
            <h3>Bruchetta</h3>
            <p class="price">$5.99</p>
          </div>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p>
            <button>Order a delivery </button>
          </p>
        </div>
        <div class="card-item">
          <img className="imag" src={lemonPie} alt="lemon pie" />
          <div className="item-header-box">
            <h3>Lemon Dessert</h3>
            <p class="price">$5.00</p>
          </div>
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authrntic as can be imagined.
          </p>
          <p>
            <button>Order a delivery </button>
          </p>
        </div>
      </div>
    </section>
  );
}
