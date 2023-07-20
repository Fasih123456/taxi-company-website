//React Components
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

//Sub Components
import BurgerMenu from "./BurgerMenu";

type NavigationProps = {};
//Displays normal navbar on desktop view and burger menu on mobile view
const Navigation: React.FC<NavigationProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, location]);

  return (
    <>
      {windowWidth > 1024 ? (
        <div>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#hero" className="dancing-font">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="dancing-font">
                    About
                  </Nav.Link>
                  <Nav.Link href="#service-details" className="dancing-font">
                    Services
                  </Nav.Link>
                  <Nav.Link href="#reserve-form" className="dancing-font">
                    <button className="fancy-button">Book Now</button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </>
  );
};

export default Navigation;
