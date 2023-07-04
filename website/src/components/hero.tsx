import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container" id="mainhero">
        <div className="row gy-4 d-flex justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>Your Lightning Fast Delivery Partner</h2>
            <p>
              Ride with us for lightning-fast deliveries. Your reliable taxi company, ready to
              exceed your expectations. Book now!
            </p>

            <form action="#" className="form-search d-flex align-items-stretch mb-3">
              <input type="text" className="form-control" placeholder="ZIP code or CitY" />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
