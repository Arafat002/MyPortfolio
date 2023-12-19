// App.jsx

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
