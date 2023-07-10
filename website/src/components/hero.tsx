import "animate.css/animate.min.css";

type HeroProps = {
  setCurrentAddress: (address: string) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  expandedHeader: boolean;
};

const Hero: React.FC<HeroProps> = ({ setCurrentAddress, handleFormSubmit, expandedHeader }) => {
  return (
    <section
      id="hero"
      className={`hero d-flex align-items-center ${
        expandedHeader == true ? "margin-top-200" : "margin-top-100"
      }`}
    >
      <div className="container" id="mainhero">
        <div className="row gy-4 d-flex justify-content-between">
          <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="animate__animated animate__fadeInDown animate__slower">
              Your Lightning Fast Delivery Partner
            </h2>
            <p className="animate__animated animate__fadeInUp animate__slower">
              Ride with us for lightning-fast deliveries. Your reliable taxi company, ready to
              exceed your expectations. Book now!
            </p>

            <form
              action="#"
              className="form-search d-flex align-items-stretch mb-3 animate__animated animate__fadeIn animate__slower"
              onSubmit={handleFormSubmit}
              id="hero-form"
            >
              <input
                type="text"
                className="form-control animate__animated animate__slideInLeft animate__slower"
                placeholder="Enter your Departure Address"
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary animate__animated animate__slideInRight animate__slower"
              >
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
