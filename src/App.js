import React from "react";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";   // Import the Hero component
import About from "./components/About"; // Import the About component
import Footer from "./components/Footer"; // Import the Footer component
import ScrollingBanner from "./components/ScrollingBanner";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> {/* Hero Section added here */}
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
