import "./App.css";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Rates from "./components/rates";
import Reserve from "./components/reserve";
import Contact from "./components/contact";
import Booking from "./components/booking";

//Bootstrap imports
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useState } from "react";

function App() {
  const [key, setKey] = useState("reserve");

  return (
    <body>
      <main id="main">
        <Header />
        <Hero />

        <About />

        <Rates />
        <Booking />
        <div className="container">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k || "")} // If k is null, provide a default empty string value
            className="mb-3"
          >
            <Tab eventKey="reserve" title="Reserve Trip">
              <Reserve />
            </Tab>
            <Tab eventKey="contact" title="Contact Us">
              <Contact />
            </Tab>
          </Tabs>
        </div>

        <Footer />
      </main>
    </body>
  );
}

export default App;
