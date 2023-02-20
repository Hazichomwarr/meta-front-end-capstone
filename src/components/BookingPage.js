import React, { memo, useReducer } from "react";
import BookingForm from "./BookingForm";

const updateTimes = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const BookingPage = memo(() => {
  const initializeTimes = [
    { id: "17:00", time: "17:00" },
    { id: "18:00", time: "18:00" },
    { id: "19:00", time: "19:00" },
    { id: "20:00", time: "20:00" },
    { id: "21:00", time: "21:00" },
    { id: "22:00", time: "22:00" },
  ];
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const handleSubmit = () => {
    alert("reservation succeed!");
  };
  return (
    <div>
      <BookingForm
        handleSubmit={handleSubmit}
        availableTimes={state}
        dispatch={dispatch}
      />
    </div>
  );
});

export default BookingPage;
