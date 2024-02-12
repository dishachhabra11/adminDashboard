import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const SideBar = () => {
  const { theme } = useTheme();
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        {" "}
        <div
          className={
            "sidebar-brand-wrapper bg-floralwhite d-none d-lg-flex align-items-center justify-content-center fixed-top shadow-xl"
          }
          style={{ backgroundColor: theme === "light" ? "#FFFAF0" : "" }}
        >
          <div class="navbar-profile" style={{ marginRight: "8px" }}>
            <img
              class="img-sm rounded-circle"
              src="assets/images/imc.png"
              alt=""
            />
          </div>
          <Link to="/">
            <h3 style={{ color: theme === "light" ? "blue" : "white" }}>
              DIGITAL DOOR
            </h3>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
