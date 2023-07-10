import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    //console.log(windowWidth, location);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, location]);

  return (
    <>
      <section id="about" className="about " style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 content order-last  order-lg-first">
              <h3 className="text-center">Welcome to East Manchester Minibus Service</h3>
              <p className="pt-10 pb-10">
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
                    <h5
                      className="text-center"
                      style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    >
                      Eight-Seater Travel Solutions
                    </h5>
                    {windowWidth > 768 ? (
                      <p>Travel in comfort and style with our spacious eight-seater minibuses.</p>
                    ) : null}
                  </div>
                </Col>
                <Col className="text-center">
                  <i className="bi bi-fullscreen-exit"></i>
                  <div className="each-service-div">
                    <h5
                      className="text-center"
                      style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    >
                      Affordable Pricing
                    </h5>

                    {windowWidth > 768 ? (
                      <p>
                        We believe that quality transportation should be accessible to everyone.
                        That's why we offer competitive rates that won't break the bank.
                      </p>
                    ) : null}
                  </div>
                </Col>
                <Col className="text-center">
                  <i className="bi bi-broadcast "></i>

                  <div className="each-service-div">
                    <h5
                      className="text-center"
                      style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    >
                      Outstanding Service
                    </h5>
                    {windowWidth > 768 ? (
                      <p>
                        Customer satisfaction is our top priority. Our dedicated team goes above and
                        beyond to ensure your journey is smooth, convenient, and enjoyable
                      </p>
                    ) : null}
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
