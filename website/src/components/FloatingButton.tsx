import { Container, Link, Button, lightColors, darkColors } from "react-floating-action-button";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdAdd } from "react-icons/md";

const FloatingButton = () => {
  return (
    <Container id="floatingButton">
      <Link
        href="https://www.facebook.com/people/East-Manchester-Minibus-Service/100094447771778/?mibextid=ZbWKwL"
        tooltip="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-item btn btn-link btn-lg text-white"
      >
        <FaFacebook />
      </Link>
      <Link
        href="https://www.instagram.com/example"
        tooltip="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-item btn btn-link btn-lg text-white"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://api.whatsapp.com/send?phone=+447894532415"
        tooltip="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-item btn btn-link btn-lg text-white"
      >
        <FaWhatsapp />
      </Link>
      <Link
        href="tel:+447894532415"
        tooltip="Phone"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-item btn btn-link btn-lg text-white"
      >
        <MdPhone />
      </Link>
      <Button
        tooltip="BiG bUtToN"
        styles={{ backgroundColor: darkColors.lighterRed, color: lightColors.white }}
      >
        <MdAdd />
      </Button>
    </Container>
  );
};

export default FloatingButton;
