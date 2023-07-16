import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import MobileOffCanvas from "./SubComponents/mobileOffCanvas";
import BurgerMenu from "./SubComponents/BurgerMenu";

type NavigationProps = {
  setExpandedHeader: (expandedHeader: boolean) => void;
  expandedHeader: boolean;
};

const options = [
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

const Navigation: React.FC<NavigationProps> = ({ setExpandedHeader, expandedHeader }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    console.log(windowWidth, location);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, location]);

  const handleMobileNavClick = () => {
    setExpandedHeader(!expandedHeader);
    // Add your desired logic or actions here
  };

  return (
    <>
      {windowWidth > 768 ? (
        <div>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={handleMobileNavClick} // Add onClick event handler
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#hero">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#service-details">Services</Nav.Link>
                  <Nav.Link href="#reserve-form">Book Now</Nav.Link>
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
