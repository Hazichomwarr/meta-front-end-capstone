import React, { useState, useRef } from "react";

export default function BookingForm(props) {
  // const ErrorMessage = () => {
  //   return <p className="FieldError">Please choose a valid date</p>;
  const [time, setTime] = useState({ value: "00:00", isTouched: false });
  const [date, setDate] = useState({ value: "", isTouched: false });
  const [guests, setGuests] = useState({ number: 0, isTouched: false });
  const [occasion, setOccasion] = useState({
    occasion: "",
    isTouched: false,
  });

  const isFormValid = () => {
    if (date.value && time.value && guests.value && occasion.value) return true;
    return false;
  };

  const clearForm = () => {
    setTime({ value: "", isTouched: false });
    setDate({ value: "", isTouched: false });
    setGuests({ value: "", isTouched: false });
    setOccasion({ value: "", isTouched: false });
  };
  const submitFunction = (e) => {
    e.preventDefault();
    props.handleSubmit(time, date, guests, occasion);
    clearForm();
  };

  return (
    <div className="booking-section">
      <form className="bookingForm" onSubmit={submitFunction}>
        <h3 className="sub-title">Book Now</h3>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date.value}
          onBlur={() => setDate({ ...date, isTouched: true })}
          onChange={(e) => setDate({ ...date, value: e.target.value })}
          required
          className={date.isTouched && !date.value ? "errorStyle" : ""}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={time.value}
          onBlur={() => setTime({ ...time, isTouched: true })}
          onChange={(e) => setTime({ ...time, value: e.target.value })}
          required
          className={
            time.isTouched && time.value === "00:00" ? "errorStyle" : ""
          }
        >
          {props.availableTimes.map((d) => (
            <option key={d.id}>{d.time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="0"
          min="0"
          max="10"
          id="guests"
          value={guests.value}
          onBlur={() => setGuests({ ...guests, isTouched: true })}
          onChange={(e) => setGuests({ ...guests, value: e.target.value })}
          required
          className={
            guests.isTouched && guests.value === "0" ? "errorStyle" : ""
          }
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion.value}
          onBlur={() => setOccasion({ ...occasion, isTouched: true })}
          onChange={(e) => setOccasion({ ...occasion, value: e.target.value })}
          required
          className={occasion.isTouched && !occasion.value ? "errorStyle" : ""}
        >
          <option>Casual</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button disabled={!isFormValid()} type="submit">
          Make Your reservation
        </button>
      </form>
    </div>
  );
}
