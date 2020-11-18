import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import MyAd from "./components/MyAd";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Products />
      <About />
      <Contact />
      <MyAd />
    </div>
  );
}

export default App;
