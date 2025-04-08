import React from "react";

// Import existing components
import Navbar from "./Navbar";
import Home from "./Home";

// ✅ Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ App component with Navbar, Home, and About
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
