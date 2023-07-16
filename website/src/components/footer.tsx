import "../index.css";

//TODO: p tag style on footer

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-12 footer-info text-center">
              <span style={{ fontSize: "20px", fontWeight: "700" }} className="text-center">
                EAST MANCHESTER MINIBUS SERVICE
              </span>

              <p className="text-center" style={{ paddingTop: "15px" }}>
                Experience seamless taxi service in Manchester with our reliable transportation
                company. We are committed to providing prompt and comfortable rides to your desired
                destinations. Our skilled drivers and modern fleet ensure a safe and enjoyable
                journey. Book your ride now and enjoy the convenience of our exceptional taxi
                services in Manchester.
              </p>
            </div>
            <div className="col-lg-4 col-6 footer-links text-center justify-center items-center">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#hero">
                    <p>Home</p>
                  </a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#service-details">Services</a>
                </li>
                <li>
                  <a href="#reserve-form">Book Now</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start text-center">
              <h4>Contact Us</h4>
              <p>
                Manchester, Rochdale,
                <br />
                Oldham,Ashton-under-Lyne
                <br />
                <strong>Phone:</strong> <a href="tel:+4407894532415">+44 07894 532415</a>
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:emmsminibus@outlook.com">emmsminibus@outlook.com</a>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright 2023
            <strong>
              <span> Sysmlogic</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
