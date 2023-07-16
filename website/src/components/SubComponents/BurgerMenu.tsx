import React from "react";
import { stack as Menu } from "react-burger-menu";

class BurgerMenu extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div id="outer-container">
        <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <a id="home" className="menu-item" href="#hero">
            Home
          </a>
          <a id="home" className="menu-item" href="#about">
            About
          </a>
          <a id="home" className="menu-item" href="#service-details">
            Services
          </a>
          <a id="home" className="menu-item" href="#reserve-form">
            Book Now
          </a>
        </Menu>
        <main id="page-wrap">. . .</main>
      </div>
    );
  }
}

export default BurgerMenu;
