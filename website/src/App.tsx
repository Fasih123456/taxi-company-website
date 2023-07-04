import "./App.css";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Reserve from "./components/reserve";

import Booking from "./components/booking";

function App() {
  return (
    <body>
      <main id="main">
        <Header />
        <Hero />

        <About />

        <Booking />

        <Reserve />

        <Footer />
      </main>
    </body>
  );
}

export default App;
