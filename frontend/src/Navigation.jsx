import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Pets } from "@mui/icons-material";
import Toys from "./Toys";
import Accessories from "./Accessories";
import Food from "./Food"; // Make sure to import Food component

function Navigation() {
  const navStyles = {
    backgroundColor: "#ffffff",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
  };

  const logoIconStyles = {
    fontSize: "2.5rem",
    color: "#333",
    marginRight: "10px",
  };

  const logoTextStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  const linkContainerStyles = {
    display: "flex",
    gap: "2rem",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "0.5rem",
    transition: "color 0.3s ease",
  };

  return (
    <Router>
      <nav style={navStyles}>
        <div style={containerStyles}>
          <div style={logoContainerStyles}>
            <Pets style={logoIconStyles} />
            <span style={logoTextStyles}>Pet Store</span>
          </div>
          <div style={linkContainerStyles}>
            <Link to="/" style={linkStyles}>
              Home
            </Link>
            <Link to="/food" style={linkStyles}>
              Food
            </Link>
            <Link to="/toys" style={linkStyles}>
              Toys
            </Link>
            <Link to="/access" style={linkStyles}>
              Accessories
            </Link>
            <Link to="/about" style={linkStyles}>
              About
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/access" element={<Accessories />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
