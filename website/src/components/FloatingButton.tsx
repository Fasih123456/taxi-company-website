import { Container, Link, Button, lightColors, darkColors } from "react-floating-action-button";

const FloatingButton = () => {
  return (
    <Container id="FABcontainer">
      <Link
        href="tel:+447894532415"
        icon="fa-solid fa-phone"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: "#6ED34A" }}
      />

      <Link
        href="https://www.facebook.com/people/East-Manchester-Minibus-Service/100094447771778/?mibextid=ZbWKwL"
        target="_blank"
        icon="fa-brands fa-facebook"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: darkColors.blue }}
      />

      <Link
        href="https://instagram.com/eastmcrminibus?igshid=ZDc4ODBmNjlmNQ=="
        icon="fa-brands fa-instagram"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: darkColors.red }}
      />

      <Link
        href="https://wa.me/+447894532415"
        icon="fa-brands fa-whatsapp"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: darkColors.green }}
      />

      <Button
        tooltip="Contact Us!"
        icon="fa-solid fa-comment fa-2xl"
        styles={{ backgroundColor: darkColors.white }}
      />
    </Container>
  );
};

export default FloatingButton;
