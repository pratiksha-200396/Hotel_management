import React from "react";
import { Link } from "react-router-dom";

function Rooms() {
  return (
    <div>

      {/* ================= Page Header ================= */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Our Rooms</h1>
        <p className="mb-0">
          Choose a comfortable room for your stay
        </p>
      </div>


      {/* ================= Rooms Section ================= */}
      <div className="container py-5">

        <div className="row">

          {/* ================= Single Room ================= */}
          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
                className="card-img-top"
                height="220"
                style={{ objectFit: "cover" }}
                alt="Single Room"
              />

              <div className="card-body">

                <h4>Single Room</h4>

                <p>
                  Comfortable room suitable for one guest.
                </p>

                <p>👤 1 Guest</p>
                <p>📶 Free Wi-Fi</p>
                <p>❄️ AC Room</p>
                <p>🍳 Breakfast</p>

                <h5>₹2,000 / Night</h5>

                <Link
                  to="/booking"
                  className="btn btn-primary w-100 mt-2"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>


          {/* ================= Double Room ================= */}
          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
                className="card-img-top"
                height="220"
                style={{ objectFit: "cover" }}
                alt="Double Room"
              />

              <div className="card-body">

                <h4>Double Room</h4>

                <p>
                  Spacious room suitable for two guests.
                </p>

                <p>👥 2 Guests</p>
                <p>📶 Free Wi-Fi</p>
                <p>❄️ AC Room</p>
                <p>🍳 Breakfast</p>

                <h5>₹3,500 / Night</h5>

                <Link
                  to="/booking"
                  className="btn btn-primary w-100 mt-2"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>


          {/* ================= Deluxe Room ================= */}
          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                className="card-img-top"
                height="220"
                style={{ objectFit: "cover" }}
                alt="Deluxe Room"
              />

              <div className="card-body">

                <h4>Deluxe Room</h4>

                <p>
                  Premium room with modern facilities.
                </p>

                <p>👥 2 Guests</p>
                <p>📶 Free Wi-Fi</p>
                <p>❄️ AC Room</p>
                <p>🛁 Private Bathroom</p>

                <h5>₹5,000 / Night</h5>

                <Link
                  to="/booking"
                  className="btn btn-primary w-100 mt-2"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>


          {/* ================= Suite Room ================= */}
          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843"
                className="card-img-top"
                height="220"
                style={{ objectFit: "cover" }}
                alt="Suite Room"
              />

              <div className="card-body">

                <h4>Suite Room</h4>

                <p>
                  Luxury suite with premium facilities.
                </p>

                <p>👥 4 Guests</p>
                <p>📶 Free Wi-Fi</p>
                <p>❄️ AC Room</p>
                <p>🛋️ Living Area</p>

                <h5>₹7,500 / Night</h5>

                <Link
                  to="/booking"
                  className="btn btn-primary w-100 mt-2"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= Facilities Section ================= */}
      <div className="bg-light py-5">

        <div className="container text-center">

          <h2 className="mb-4">
            Room Facilities
          </h2>

          <div className="row">

            <div className="col-md-3 col-6 mb-3">
              <h5>📶 Free Wi-Fi</h5>
            </div>

            <div className="col-md-3 col-6 mb-3">
              <h5>❄️ Air Conditioning</h5>
            </div>

            <div className="col-md-3 col-6 mb-3">
              <h5>📺 Smart TV</h5>
            </div>

            <div className="col-md-3 col-6 mb-3">
              <h5>🚿 Hot Water</h5>
            </div>

          </div>

        </div>

      </div>


      {/* ================= Booking CTA ================= */}
      <div className="text-center py-5">

        <h2>Ready to Book?</h2>

        <p className="text-muted">
          Select your room and make your reservation.
        </p>

        <Link
          to="/booking"
          className="btn btn-primary btn-lg"
        >
          Book Your Room
        </Link>

      </div>

    </div>
  );
}

export default Rooms;