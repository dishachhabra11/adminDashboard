import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useTheme } from "./ThemeContext";

function Layout() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating progress update with a timeout
    const timer = setTimeout(() => {
      setProgress((progress) => progress + 20); // For example, setting progress to 70%
    }, 2000); // Delay of 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      className="container-screen"
      style={{ backgroundColor: theme === "light" ? "floralwhite" : "" }}
    >
      <LoadingBar progress={progress} height={3} color="red" />
      <SideBar />
      <div className="container-fluid">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
