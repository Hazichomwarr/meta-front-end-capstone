import React, { memo } from "react";
import starImag from "../icons_assets/restaurant_review-5-stars.jpg";

const Testimonials = memo(() => {
  return (
    <div className="testimonials">
      <h3 className="sub-title">Testimonials</h3>
      <div className="testimonials-container">
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>{" "}
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
        <div className="grid-item">
          <div class="card-item">
            <img className="imag" src={starImag} alt="star" />
            <h3>Reviewer's Name</h3>
            <p>This is the best Mediterraneen food that I've ever had!</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Testimonials;
