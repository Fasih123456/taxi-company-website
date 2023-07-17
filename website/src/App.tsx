import "./App.css";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Booking from "./components/booking";
import FloatingButton from "./components/FloatingButton";
import ReserveForm from "./components/SubComponents/ReserveForm";

//React Import
import React, { useState, useRef } from "react";

//TODO: add favicon
//Single page website with no react router usages, all components are rendered in App.tsx
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
    <>
      <FloatingButton />
      <body>
        <main id="main">
          <Header />
          <Hero setCurrentAddress={setCurrentAddress} handleFormSubmit={handleFormSubmit} />

          <About />

          <Booking />

          <div ref={reserveRef}>
            <ReserveForm currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
          </div>

          <Footer />
        </main>
      </body>
    </>
  );
}

export default App;
