import "./App.css";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Reserve from "./components/reserve";
import Booking from "./components/booking";

//React Import
import React, { useState, useRef } from "react";

//TODO: Add floating component

function App() {
  const [currentAddress, setCurrentAddress] = useState("");

  const reserveRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Scroll to the reserve section
    if (reserveRef.current) {
      reserveRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <body>
      <main id="main">
        <Header />
        <Hero setCurrentAddress={setCurrentAddress} handleFormSubmit={handleFormSubmit} />

        <About />

        <Booking />

        <div ref={reserveRef}>
          <Reserve currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        </div>
        <Footer />
      </main>
    </body>
  );
}

export default App;
