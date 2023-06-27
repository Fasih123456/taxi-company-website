import heroImage from "../assets/img/hero-img.svg";

function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
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

          <div className="col-lg-5 order-1 order-lg-2 hero-img">
            <img src={heroImage} className="img-fluid mb-3 mb-lg-0" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
