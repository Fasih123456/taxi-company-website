import logo from "../assets/img/logo.png";

//TODO: Add mobile phone header
//TODO: Seperate Navigation component

function Header() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src={logo} alt=""></img>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#rates">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a className="get-a-quote" href="#reserve">
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
