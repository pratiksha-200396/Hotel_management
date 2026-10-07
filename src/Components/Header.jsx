import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Hotel Logo / Name */}
   <Link className="navbar-brand" to="/">
  <img
    src="https://images.playgroundai.com/9589216a-ba00-489f-8929-c1fab6868a19.jpeg"
    alt="Grand Palace Hotel"
    style={{
      width: "120px",
      height: "50px",
      objectFit: "contain"
    }}
  />
</Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hotelNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="hotelNavbar">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/booking">
                Booking
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/customer-details">
                Customer Details
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;