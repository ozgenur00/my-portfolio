import React from "react";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";   
import About from "./components/About"; 
import Footer from "./components/Footer"; 
import ScrollingBanner from "./components/ScrollingBanner";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <ScrollingBanner />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
