import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/BookingPage";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe('Validate the behavior of the "updateTimes" and "initializeTimes" reducer functions', () => {
  test("validate 'initializeTimes' behavior", () => {
    expect(initializeTimes).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        time: expect.any(String),
      })
    );
  });

  test("validate 'updateTimes' behabior", () => {
    render(<BookingPage />);
    expect(updateTimes).toHaveBeenCalled();
  });
});
