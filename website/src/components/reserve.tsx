import backgroundImage from "../assets/img/quote-bg.jpg";
function Reserve() {
  return (
    <>
      <section id="reserve" className="get-a-quote">
        <div className="container">
          <div className="row g-0">
            <div
              className="col-lg-5 quote-bg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="col-lg-7">
              <form action="forms/quote.php" method="post" className="php-email-form">
                <h3>Reserve Trip</h3>
                <p>
                  After you have filled out this form a taxi will be dispatched to your location.
                </p>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="departure"
                      className="form-control"
                      placeholder="Address of Departure"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="delivery"
                      className="form-control"
                      placeholder="Address of Arrival"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="Postal Code of Departure"
                      className="form-control"
                      placeholder="B3H 1X9"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="1"
                      className="form-control"
                      placeholder="Number Of Passengers"
                      required
                    />
                  </div>

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

                    <button type="submit">Reserve Trip</button>
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

export default Reserve;
