//Image imports
import logo from "../assets/img/logo.png";

// Component Imports
import Navigation from "./SubComponents/Navigation";

//Dependencies
import { Container } from "react-bootstrap";

type HeaderProps = {};

//Displays the header of the website, only manages the logo of the image. navigation bar rendering is handled by the Navigation component
const Header: React.FC<HeaderProps> = () => {
  return (
    <Container
      fluid
      className="container-xl d-flex align-items-center justify-content-between pt-10"
    >
      <a href="/" className="logo d-flex align-items-center">
        <img src={logo} alt="" className="fixed-logo" id="img-logo" />
      </a>

      <Navigation />
    </Container>
  );
};

export default Header;
