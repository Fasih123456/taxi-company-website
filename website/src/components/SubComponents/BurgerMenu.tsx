import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";

class BurgerMenu extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  showSettings(event: any) {
    event.preventDefault();
  }

  isMenuOpen = (state) => {
    let burgerButton = document.querySelector(".bm-burger-button");

    if (state.isOpen) {
      burgerButton.style.display = "none";
    } else {
      burgerButton.style.display = "block";
    }

    return state.isOpen;
  };

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div id="outer-container">
        <Menu
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          onStateChange={(state) => this.isMenuOpen(state)}
        >
          <a id="home" className="menu-item dancing-font" href="#hero">
            Home
          </a>
          <a id="home" className="menu-item dancing-font" href="#about">
            About
          </a>
          <a id="home" className="menu-item dancing-font" href="#service-details">
            Services
          </a>
          <a id="home" className="menu-item dancing-font" href="#reserve-form">
            Book Now
          </a>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
