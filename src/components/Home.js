import React, { memo } from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Nav from "./Nav";
import Testimonials from "./Testimonials";

const Home = memo(() => {
  return (
    <div id="home">
      <Nav />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
});

export default Home;
