import React from "react";

function Contact() {
  return (
    <div>

      {/* ================= Page Header ================= */}

      <div className="bg-dark text-white text-center py-5">
        <h1>Contact Us</h1>

        <p className="mb-0">
          Get in touch with Grand Palace Hotel
        </p>
      </div>


      {/* ================= Contact Section ================= */}

      <div className="container py-5">

        <div className="row">

          {/* Contact Information */}

          <div className="col-md-5 mb-4">

            <h2>Get In Touch</h2>

            <p className="text-muted">
              We are always happy to help you with your
              booking and stay.
            </p>


            <div className="mt-4">

              <h5>📍 Address</h5>
              <p>
                Grand Palace Hotel,<br />
                Pune, Maharashtra, India
              </p>

            </div>


            <div className="mt-4">

              <h5>📞 Phone</h5>
              <p>
                +91 9876543210
              </p>

            </div>


            <div className="mt-4">

              <h5>✉️ Email</h5>
              <p>
                grandpalace@gmail.com
              </p>

            </div>


            <div className="mt-4">

              <h5>🕐 Reception</h5>
              <p>
                Available 24 Hours
              </p>

            </div>

          </div>


          {/* Contact Form */}

          <div className="col-md-7">

            <div className="card shadow">

              <div className="card-body p-4">

                <h3 className="mb-4">
                  Send Us a Message
                </h3>


                <form>

                  {/* Name */}

                  <div className="mb-3">

                    <label className="form-label">
                      Your Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />

                  </div>


                  {/* Email */}

                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />

                  </div>


                  {/* Contact */}

                  <div className="mb-3">

                    <label className="form-label">
                      Contact Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your contact number"
                    />

                  </div>


                  {/* Message */}

                  <div className="mb-3">

                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= Hotel Location ================= */}

      <div className="bg-light py-5">

        <div className="container text-center">

          <h2>Visit Our Hotel</h2>

          <p className="text-muted">
            We look forward to welcoming you to Grand Palace Hotel.
          </p>

          <div className="border rounded p-5 mt-4">

            <h4>📍 Grand Palace Hotel</h4>

            <p>
              Pune, Maharashtra, India
            </p>

            <p>
              📞 +91 9876543210
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;