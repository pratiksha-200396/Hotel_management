import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">
        <div className="row">

          {/* Hotel Information */}
          <div className="col-md-4 mb-4">
            <h4>🏨 Grand Palace Hotel</h4>

            <p className="mt-3">
              Experience comfortable rooms, excellent hospitality
              and a relaxing stay with us.
            </p>

            <p>
              Your comfort is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/rooms" className="text-white text-decoration-none">
                  Rooms
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/booking" className="text-white text-decoration-none">
                  Booking
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/customer-details"
                  className="text-white text-decoration-none"
                >
                  Customer Details
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>

            <p className="mt-3">
              📍 Pune, Maharashtra
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ✉️ grandpalace@gmail.com
            </p>

            <p>
              🕐 24/7 Reception
            </p>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-top border-secondary text-center py-3">
        <p className="mb-0">
          © 2026 Grand Palace Hotel. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;