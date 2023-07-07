import aboutImage from "../assets/img/about.jpg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <section id="about" className="about " style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 content order-last  order-lg-first">
              <h3>Welcome to EMMS - East Manchester Minibus Service</h3>
              <p>
                EMMS is your premier choice for reliable and affordable transportation services in
                East Manchester and surrounding areas. With over 20 years of experience in the
                industry, we take pride in offering a first-class travel solution that caters to all
                your needs. Whether you're heading to the airport, planning a day trip, attending a
                sporting event, or simply enjoying a fun night out, EMMS has you covered.
              </p>
              <Row>
                <Col className="text-center">
                  <i className="bi bi-diagram-3"></i>
                  <div className="each-service-div">
                    <h5>Eight-Seater Travel Solutions</h5>
                    <p>Travel in comfort and style with our spacious eight-seater minibuses.</p>
                  </div>
                </Col>
                <Col className="text-center">
                  <i className="bi bi-fullscreen-exit"></i>
                  <div className="each-service-div">
                    <h5>Affordable Pricing</h5>
                    <p>
                      We believe that quality transportation should be accessible to everyone.
                      That's why we offer competitive rates that won't break the bank.
                    </p>
                  </div>
                </Col>
                <Col className="text-center">
                  <i className="bi bi-broadcast"></i>
                  <div className="each-service-div">
                    <h5>Outstanding Service</h5>
                    <p>
                      Customer satisfaction is our top priority. Our dedicated team goes above and
                      beyond to ensure your journey is smooth, convenient, and enjoyable
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
