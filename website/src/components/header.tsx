//Image imports
import logo from "../assets/img/logo.png";

// Component Imports
import Navigation from "./SubComponents/Navigation";

//Dependencies
import { Container } from "react-bootstrap";

type HeaderProps = {};

//Displays the header of the website, only manages the logo of the image. navigation bar rendering is handled by the Navigation component
import React, { useEffect } from "react";

const Header: React.FC<HeaderProps> = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;

      // Calculate the opacity based on the user's scrolling position
      const scrollPosition = window.scrollY;
      const headerHeight = header.clientHeight;
      const maxScroll = 300; // Adjust this value to change when the header reaches its maximum opacity

      // Calculate the opacity based on the scroll position
      const opacity = Math.min(scrollPosition / maxScroll, 1);

      // Set the background color with increasing opacity
      header.style.backgroundColor = `rgba(255,255,255, ${opacity})`;
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <Container
        fluid
        className="container-xl d-flex align-items-center justify-content-between pt-10"
      >
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" className="fixed-logo" id="img-logo" />
        </a>

        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
