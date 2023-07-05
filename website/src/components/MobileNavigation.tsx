const MobileNavigation = () => {
  return (
    <nav id="mobile-navbar" className="navbar mobile-navbar">
      {/* Mobile navigation links */}
      <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle" />
      <label htmlFor="mobile-menu-toggle" className="mobile-menu-btn">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
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
  );
};

export default MobileNavigation;
