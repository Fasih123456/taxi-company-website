import { Navbar, Nav, Container } from "react-bootstrap";

type NavigationProps = {
  setExpandedHeader: (expandedHeader: boolean) => void;
  expandedHeader: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ setExpandedHeader, expandedHeader }) => {
  const handleMobileNavClick = () => {
    setExpandedHeader(!expandedHeader);
    // Add your desired logic or actions here
  };

  return (
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
  );
};

export default Navigation;
