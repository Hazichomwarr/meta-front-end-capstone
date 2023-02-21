import React, { memo, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const url =
  "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

export const updateTimes = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const initializeTimes = [
  { id: "00:00", time: "00:00" },
  { id: "17:00", time: "17:00" },
  { id: "18:00", time: "18:00" },
  { id: "19:00", time: "19:00" },
  { id: "20:00", time: "20:00" },
  { id: "21:00", time: "21:00" },
  { id: "22:00", time: "22:00" },
];

const BookingPage = memo(() => {
  // const fetchData = () => {
  //   fetch(url)
  //     .then((response) => response.text())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  const [bookingData, updateBookingData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (time, date, guests, occasion) => {
    updateBookingData([time, date, guests, occasion]);
    navigate("/booking-confirmed");
  };

  useEffect(() => {
    console.log(bookingData);
  }, [bookingData]);

  return (
    <>
      <BookingForm
        handleSubmit={handleSubmit}
        availableTimes={state}
        dispatch={dispatch}
      />
    </>
  );
});

export default BookingPage;
