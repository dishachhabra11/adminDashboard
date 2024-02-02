import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ComplaintsTable from "./components/ComplaintsTable";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/dashboard"
          element={
            <div className="container-screen" style={{ userSelect: "none" }}>
              <SideBar />
              <div className="container-fluid">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/complaints" element={<ComplaintsTable />} />
                </Routes>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
