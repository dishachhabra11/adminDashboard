import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <nav class="navbar p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          {/* <Link to="./complaints">complaints </Link> */}
          <ul class="navbar-nav navbar-nav-right" style={{ gap: "7px" }}>
            <li>
              <Link to="/">
                <button type="button" class="btn btn-outline-primary">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/complaints">
                <button type="button" class="btn btn-outline-primary">
                  Complaints
                </button>
              </Link>
            </li>
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
