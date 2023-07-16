import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav, Navbar } from "react-bootstrap";

function MobileOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        // Add onClick event handler
      />
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"} scroll={true}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto">
            <div style={{ width: "100%" }}>
              <Nav.Link href="#hero">Home</Nav.Link>
            </div>

            <div style={{ width: "100%" }}>
              <Nav.Link href="#about">About</Nav.Link>
            </div>

            <div style={{ width: "100%" }}>
              <Nav.Link href="#service-details">Services</Nav.Link>
            </div>

            <div style={{ width: "100%" }}>
              <Nav.Link href="#reserve-form">Book Now</Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileOffCanvas;
