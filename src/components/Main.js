import React from "react";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <main id="main">
      <Routes>
        <Route path="/" element={<HeroSection />}></Route> 
        <Route path="/about" element={<HeroSection />}></Route>
        <Route path="/menu" element={<Highlights />}></Route>
      </Routes>
    </main>
  );
}
