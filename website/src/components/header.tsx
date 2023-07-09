import logo from "../assets/img/logo.png";

//TODO: Add mobile phone header
//TODO: Seperate Navigation component

import Navigation from "./Navigation";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <Container fluid className="container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" className="fixed-logo" />
        </a>

        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
