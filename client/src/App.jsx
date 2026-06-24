import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TechStack from "./components/tech/Stack";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
