//Dependencies
import { Container, Row, Col } from "react-bootstrap";
import TailWindCard from "./SubComponents/TailWindCard";

//Component imports
import AirportPickUp from "../assets/img/booking-img/1.jpeg";
import DayTrips from "../assets/img/booking-img/2.jpg";
import Resorts from "../assets/img/booking-img/3.jpeg";
import Sports from "../assets/img/booking-img/4.jpeg";
import NightOut from "../assets/img/booking-img/5.jpg";
import Appointment from "../assets/img/booking-img/6.jpg";

//CSS imports
import "../index.css";
import "animate.css/animate.min.css";

const cardTitles = [
  "Airport Drop Off and Pick-Up",
  "Day Trips",
  "Resorts",
  "Sporting Events",
  "Fun Nights Out",
  "Custom Booking",
];

const cardText = [
  "Trust us to provide prompt and reliable airport transfers, making your travel experience stress-free.",
  "Explore the beauty and attractions of East Manchester and beyond with our convenient day trip services.",
  "Planning a relaxing getaway? Let us take care of your transportation needs, ensuring you arrive at your chosen resort comfortably and on time.",
  "Whether you're a sports fan or a participant, we'll get you to your desired sporting events, ensuring you don't miss a moment of the action",
  "Enjoy a night on the town with peace of mind. Our reliable minibus service will transport you and your group safely, allowing you to fully immerse yourself in the festivities.",
  "Need transportation for a longer journey or have specific requirements? Contact us directly, and we'll work with you to create a custom booking tailored to your needs.",
];

const cardImages = [AirportPickUp, DayTrips, Resorts, Sports, NightOut, Appointment];

function Booking() {
  return (
    <section id="service-details" className="service-details overlay">
      <Container>
        <h3 id="main-heading">Top Reasons To Choose East Manchester Minibus Service</h3>
        <Row style={{ paddingTop: "30px" }}>
          {cardImages.slice(0, 3).map((imgSrc, index) => (
            <Col
              key={index}
              className={`md:w-1/3 card-styling animate__animated animate__fadeInLeft animate__delay-${index}s `}
            >
              <TailWindCard imgSrc={imgSrc}>
                <h3 className="card-heading font-bold mb-2 text-white">{cardTitles[index]}</h3>
                <p className="card-text">{cardText[index]}</p>
              </TailWindCard>
            </Col>
          ))}
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          {cardImages.slice(3, 6).map((imgSrc, index) => (
            <Col
              key={index}
              className={`md:w-1/3 card-styling animate__animated animate__fadeInLeft animate__delay-${index}s `}
            >
              <TailWindCard imgSrc={imgSrc}>
                <h3 className="card-heading font-bold mb-2 text-white">{cardTitles[index + 3]}</h3>
                <p className="card-text">{cardText[index + 3]}</p>
              </TailWindCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Booking;
