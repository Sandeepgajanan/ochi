import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Cards from "./components/Cards";
import Finalcards from "./components/Finalcards";
import Startproject from "./components/Startproject";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen bg-[#F1F1F1] pt-1 ">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Eyes />
        <Cards />
        <Finalcards />
        <Startproject />
        <Footer />
      </div>
    </>
  );
};

export default App;
