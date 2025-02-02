// import "navBar.css";
import React from "react";
import CoolButtons from "../CoolButtons";

class NavBar extends React.Component {
  render() {
    let navOne = (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <div className="navbar-dropdown">
              <hr className="navbar-divider" />
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <CoolButtons login="Log in" signup="Sign Up" />
            </div>
          </div>
        </div>
      </nav>
    );
    return navOne;
  }
}

export default NavBar;
