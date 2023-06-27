import backgroundImage from "../assets/img/quote-bg.jpg";

function Contact() {
  return (
    <>
      <section id="contact" className="get-a-quote">
        <div className="container">
          <div className="row g-0">
            <div
              className="col-lg-5 quote-bg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="col-lg-7">
              <form action="forms/quote.php" method="post" className="php-email-form">
                <h3>Contact Us</h3>
                <p>Thank you for your inquiry. We will get back to you as soon as possible.</p>
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <h4>Your Personal Details</h4>
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="trip-number"
                      placeholder="Your Trip Number"
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your quote request has been sent successfully. Thank you!
                    </div>

                    <button type="submit">Send Inquiry</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
