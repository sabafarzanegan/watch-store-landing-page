import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
    </div>
  );
}

export default App;
