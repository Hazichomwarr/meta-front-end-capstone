import React from "react";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import About from "./About";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Main() {
  return (
    <main id="main">
      <Nav />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/online-order" element={""} />
        <Route path="/login" element={""} />
      </Routes>
      <Footer />
    </main>
  );
}
