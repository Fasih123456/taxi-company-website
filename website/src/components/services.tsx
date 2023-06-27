import serviceImage from "../assets/img/features-1.jpg";

function Services() {
  return (
    <>
      <section id="services" className="features">
        <h1>Our Services</h1>
        <div className="container">
          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5">
              <img src={serviceImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in
                  voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5 order-1 order-md-2">
              <img src={serviceImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5">
              <img src={serviceImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod.
                Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in
                  voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad
                  fugiat.
                </li>
              </ul>
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5 order-1 order-md-2">
              <img src={serviceImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default Services;
