import aboutImage from "../assets/img/about.jpg";
import { useState } from "react";

function Booking() {
  const [currentSectionId, setCurrentSectionId] = useState(0);

  return (
    <section id="service-details" className="service-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="services-list">
              <a href="#service-details" onClick={() => setCurrentSectionId(0)} className="active">
                Airport Drop Off and Pick-Up
              </a>

              <a href="#service-details" onClick={() => setCurrentSectionId(1)} className="active">
                Day Trips
              </a>

              <a href="#service-details" onClick={() => setCurrentSectionId(2)} className="active">
                Resorts
              </a>
              <a href="#service-details" onClick={() => setCurrentSectionId(3)} className="active">
                Sporting Events
              </a>
              <a href="#service-details" onClick={() => setCurrentSectionId(4)} className="active">
                Fun Nights Out
              </a>
              <a href="#service-details" onClick={() => setCurrentSectionId(5)} className="active">
                Custom Booking
              </a>
            </div>

            <h1 style={{ fontWeight: "bolder" }}>Bookings</h1>
            <p>
              To ensure a seamless experience, we require all bookings to be made in advance.
              Reservations are easy – simply visit our website and use our convenient booking page,
              or give us a call at our new number. Our friendly staff will assist you in securing
              your transportation with EMMS.
            </p>
          </div>

          <div className="col-lg-8">
            {currentSectionId === 0 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Airport Drop and Pick-Up</h3>
                <p>
                  Trust us to provide prompt and reliable airport transfers, making your travel
                  experience stress-free.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Aut eum totam accusantium voluptatem.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
                <p>
                  Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti
                  quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                </p>
                <p>
                  Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur
                  recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut
                  occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque.
                  Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque
                  iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur
                  vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum
                  quia impedit dolore alias explicabo ea.
                </p>
              </>
            )}
            {currentSectionId === 1 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Day Trips</h3>
                <p>
                  Explore the beauty and attractions of East Manchester and beyond with our
                  convenient day trip services.
                </p>
              </>
            )}
            {currentSectionId === 2 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Resorts</h3>
                <p>
                  Planning a relaxing getaway? Let us take care of your transportation needs,
                  ensuring you arrive at your chosen resort comfortably and on time.
                </p>
              </>
            )}
            {currentSectionId === 3 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Sporting Events</h3>
                <p>
                  Whether you're a sports fan or a participant, we'll get you to your desired
                  sporting events, ensuring you don't miss a moment of the action.
                </p>
              </>
            )}
            {currentSectionId === 4 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Fun Nights Out</h3>
                <p>
                  Enjoy a night on the town with peace of mind. Our reliable minibus service will
                  transport you and your group safely, allowing you to fully immerse yourself in the
                  festivities.
                </p>
              </>
            )}

            {currentSectionId === 5 && (
              <>
                <img src={aboutImage} alt="" className="img-fluid services-img" />
                <h3>Custom Bookings</h3>
                <p>
                  eed transportation for a longer journey or have specific requirements? Contact us
                  directly, and we'll work with you to create a custom booking tailored to your
                  needs.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
