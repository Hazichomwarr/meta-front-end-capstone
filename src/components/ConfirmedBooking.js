import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="booking-section">
      <div className="bookingForm">
        <Link className="close-confirmation" role="button" to={"/reservations"}>
          X
        </Link>
        <h3 className="sub-title">Booking confirmed!</h3>
        <h3 className="sub-title">We'll see you soon 😃</h3>
      </div>
    </div>
  );
}
