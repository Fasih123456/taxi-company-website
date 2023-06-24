import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Rates from "./components/rates";
import Reserve from "./components/reserve";
import Contact from "./components/contact";

function App() {
  return (
    <body>
      <main id="main">
        <Header />
        <Hero />

        <About />
        <Rates />
        <Reserve />
        <Contact />
        <Footer />
      </main>
    </body>
  );
}

export default App;
