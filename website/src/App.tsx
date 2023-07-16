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

//TODO: Change font style to roboto condensed(300 weight)
//TODO: Center all texts in mobile view
function App() {
  const [currentAddress, setCurrentAddress] = useState("");
  const [expandedHeader, setExpandedHeader] = useState(false);

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
          <Header setExpandedHeader={setExpandedHeader} expandedHeader={expandedHeader} />
          <Hero
            setCurrentAddress={setCurrentAddress}
            handleFormSubmit={handleFormSubmit}
            expandedHeader={expandedHeader}
          />

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

/*

        <div ref={reserveRef}>
          <Reserve currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        </div>
*/

export default App;
