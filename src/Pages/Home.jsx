import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* ================= Carousel ================= */}
      <div
        id="hotelCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1681790659575-87298a228948?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Hotel"
            />

            <div className="carousel-caption">
              <h1>Welcome to Grand Palace Hotel</h1>
              <p>Comfortable Stay & Excellent Hospitality</p>

              <Link to="/booking" className="btn btn-primary">
                Book Your Room
              </Link>
            </div>
          </div>


          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Hotel Room"
            />

            <div className="carousel-caption">
              <h1>Luxury Rooms</h1>
              <p>Relax and enjoy your comfortable stay</p>

              <Link to="/rooms" className="btn btn-primary">
                Explore Rooms
              </Link>
            </div>
          </div>


          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="Hotel"
            />

            <div className="carousel-caption">
              <h1>Perfect Place to Stay</h1>
              <p>Make your stay memorable with us</p>

              <Link to="/about" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>

        </div>


        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hotelCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>


        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hotelCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>


      {/* ================= Welcome Section ================= */}

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2>Welcome to Grand Palace Hotel</h2>

          <p className="text-muted">
            Enjoy a comfortable and memorable stay with our
            excellent rooms and modern facilities.
          </p>

        </div>


        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">

              <div className="card-body">

                <h4>🛏️ Comfortable Rooms</h4>

                <p>
                  Clean, spacious and comfortable rooms
                  for a relaxing stay.
                </p>

              </div>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">

              <div className="card-body">

                <h4>📶 Free Wi-Fi</h4>

                <p>
                  Enjoy high-speed Wi-Fi throughout
                  the hotel.
                </p>

              </div>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">

              <div className="card-body">

                <h4>🍽️ Restaurant</h4>

                <p>
                  Enjoy delicious food and beverages
                  at our hotel restaurant.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>


      {/* ================= Popular Rooms ================= */}

      <div className="bg-light py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2>Our Popular Rooms</h2>

            <p className="text-muted">
              Choose the room that suits your needs.
            </p>

          </div>


          <div className="row">

            {/* Single Room */}
            <div className="col-md-4 mb-4">

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

                  <h5>₹2,000 / Night</h5>

                  <Link
                    to="/booking"
                    className="btn btn-primary mt-2"
                  >
                    Book Now
                  </Link>

                </div>
              </div>

            </div>


            {/* Double Room */}
            <div className="col-md-4 mb-4">

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

                  <h5>₹3,500 / Night</h5>

                  <Link
                    to="/booking"
                    className="btn btn-primary mt-2"
                  >
                    Book Now
                  </Link>

                </div>
              </div>

            </div>


            {/* Deluxe Room */}
            <div className="col-md-4 mb-4">

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

                  <h5>₹5,000 / Night</h5>

                  <Link
                    to="/booking"
                    className="btn btn-primary mt-2"
                  >
                    Book Now
                  </Link>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= Hotel Facilities ================= */}

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2>Hotel Facilities</h2>

          <p className="text-muted">
            Everything you need for a comfortable stay.
          </p>

        </div>


        <div className="row text-center">

          <div className="col-md-3 col-6 mb-4">
            <h5>📶 Free Wi-Fi</h5>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5>🚗 Free Parking</h5>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5>🍽️ Restaurant</h5>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5>🏊 Swimming Pool</h5>
          </div>

        </div>

      </div>


      {/* ================= Booking CTA ================= */}

      <div className=".bg-primary text-white text-center py-5">

        <div className="container">

          <h2>Ready to Book Your Stay?</h2>

          <p className="mt-3">
            Reserve your room today and enjoy a comfortable stay.
          </p>

          <Link
            to="/booking"
            className="btn btn-light btn-lg mt-2"
          >
            Book Your Room
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;