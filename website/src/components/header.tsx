import logo from "../assets/img/logo.png";

import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

type HeaderProps = {
  setExpandedHeader: (expandedHeader: boolean) => void;
  expandedHeader: boolean;
};

const Header: React.FC<HeaderProps> = ({ setExpandedHeader, expandedHeader }) => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <Container fluid className="container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" className="fixed-logo" id="img-logo" />
        </a>

        <Navigation setExpandedHeader={setExpandedHeader} expandedHeader={expandedHeader} />
      </Container>
    </header>
  );
};

export default Header;
