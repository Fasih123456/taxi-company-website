function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>EMMS</span>
              </a>
              <p>
                Experience seamless taxi service in Manchester with our reliable transportation
                company. We are committed to providing prompt and comfortable rides to your desired
                destinations. Our skilled drivers and modern fleet ensure a safe and enjoyable
                journey. Book your ride now and enjoy the convenience of our exceptional taxi
                services in Manchester.
              </p>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#hero">Home</a>
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

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Manchester, Rochdale,
                <br />
                Oldham,Ashton-under-Lyne
                <br />
                <strong>Phone:</strong> +44 07894 532415
                <br />
                <strong>Email:</strong> emmsminibus@outlook.com
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
