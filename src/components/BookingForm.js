import React, { useState } from "react";

export default function BookingForm(props) {
  // const ErrorMessage = () => {
  //   return <p className="FieldError">Please choose a valid date</p>;
  // };
  // const [date, setDate] = useState({ value: "", isTouched: false });
  const [date, setDate] = useState({ value: "", isTouched: false });
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("casual");

  const isFormValid = () => {
    if (date.value && time && guests && occasion) return true;
    return false;
  };

  const clearForm = () => {
    setTime("");
    setDate({ value: "", isTouched: false });
    setGuests("");
    setOccasion("");
  };
  const submitFunction = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      props.handleSubmit();
      clearForm();
    }
  };

  return (
    <div className="booking-section">
      <form className="" onSubmit={submitFunction}>
        <h3 className="sub-title">Book Table</h3>
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
          value={time}
          onChange={(e) => props.dispatch({ type: date })}
        >
          {props.availableTimes.map((d) => (
            <option key={d.id}>{d.time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
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
