import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>

      {/* ================= Page Header ================= */}
      <div className="bg-dark text-white text-center py-5">
        <h1>About Our Hotel</h1>
        <p className="mb-0">
          Know more about Grand Palace Hotel
        </p>
      </div>


      {/* ================= About Hotel ================= */}
      <div className="container py-5">

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-6 mb-4">

            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791"
              className="img-fluid rounded shadow"
              alt="Grand Palace Hotel"
            />

          </div>


          {/* Content */}
          <div className="col-md-6">

            <h2>Welcome to Grand Palace Hotel</h2>

            <p className="mt-3">
              Grand Palace Hotel is a comfortable and modern hotel
              designed to provide guests with a relaxing and memorable
              stay.
            </p>

            <p>
              We provide comfortable rooms, delicious food,
              free Wi-Fi, parking and other modern facilities
              for our guests.
            </p>

            <p>
              Our friendly staff is always ready to provide
              excellent hospitality and make your stay comfortable.
            </p>

            <Link
              to="/booking"
              className="btn btn-primary mt-2"
            >
              Book Your Room
            </Link>

          </div>

        </div>

      </div>


      {/* ================= Why Choose Us ================= */}
      <div className="bg-light py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2>Why Choose Us?</h2>

            <p className="text-muted">
              We provide everything you need for a comfortable stay.
            </p>

          </div>


          <div className="row">

            {/* Feature 1 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow h-100 text-center">

                <div className="card-body">

                  <h3>🛏️</h3>

                  <h4>Comfortable Rooms</h4>

                  <p>
                    Clean, spacious and comfortable rooms
                    for a relaxing stay.
                  </p>

                </div>

              </div>

            </div>


            {/* Feature 2 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow h-100 text-center">

                <div className="card-body">

                  <h3>⭐</h3>

                  <h4>Excellent Service</h4>

                  <p>
                    Our staff provides friendly and
                    professional hospitality.
                  </p>

                </div>

              </div>

            </div>


            {/* Feature 3 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow h-100 text-center">

                <div className="card-body">

                  <h3>💰</h3>

                  <h4>Affordable Prices</h4>

                  <p>
                    Enjoy quality accommodation at
                    reasonable prices.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= Facilities ================= */}
      <div className="container py-5">

        <div className="text-center mb-5">

          <h2>Our Facilities</h2>

          <p className="text-muted">
            Modern facilities for a pleasant experience.
          </p>

        </div>


        <div className="row text-center">

          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>📶</h3>
              <h5>Free Wi-Fi</h5>
            </div>
          </div>


          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>🚗</h3>
              <h5>Free Parking</h5>
            </div>
          </div>


          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>🍽️</h3>
              <h5>Restaurant</h5>
            </div>
          </div>


          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>🏊</h3>
              <h5>Swimming Pool</h5>
            </div>
          </div>

        </div>

      </div>


      {/* ================= Bottom CTA ================= */}
      <div className="bg-primary text-white text-center py-5">

        <h2>Plan Your Stay With Us</h2>

        <p>
          Book your room today and enjoy a comfortable stay.
        </p>

        <Link
          to="/booking"
          className="btn btn-light"
        >
          Book Now
        </Link>

      </div>

    </div>
  );
}

export default About;