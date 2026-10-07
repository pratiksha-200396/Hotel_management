import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerDetails() {

  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {

  //   fetch("http://localhost:3000/bookings")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBookings(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching booking data:", error);
  //     });

  // }, []);

  const [bookings, setBookings] = useState([]);

  let navigate = useNavigate();
  async function getAllBookings() {

    try {

      let result = await axios.get(
        "http://localhost:8080/getall"
      )

      setBookings(result.data);

    } catch (error) {

      console.log("Error fetching booking data:", error);

    }

  }

  let deleteBooking = async (id)=>{
    if(confirm('you want to delete this reconrd' + id)){
      await axios.delete('http://localhost:8080/delete/' + id);
      getAllBookings();
    }
  }

  let onEdit = (id) =>{
    if(confirm('do you want to update record ' + id)){
      navigate('/updatebooking/' + id) ;
    }

  };

  useEffect(() => {

    getAllBookings();

  }, []);


  return (
    <div>

      {/* ================= Page Header ================= */}

      <div className="bg-dark text-white text-center py-5">

        <h1>Customer Details</h1>

        <p className="mb-0">
          View all hotel booking details
        </p>

      </div>


      {/* ================= Customer Table ================= */}

      <div className="container py-5">

        <div className="card shadow">

          <div className="card-body">

            <h3 className="text-center mb-4">
              Booking Records
            </h3>


            <div className="table-responsive">

              <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">

                  <tr>

                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Guests</th>
                    <th>Room Type</th>
                    <th>Rooms</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Payment</th>
                    <th>City</th>
                    <th>Action</th>

                  </tr>

                </thead>


                <tbody>

                  {bookings.length > 0 ? (

                    bookings.map((booking) => (

                      <tr key={booking.id}>

                        <td>{booking.id}</td>

                        <td>{booking.customerName}</td>

                        <td>{booking.email}</td>

                        <td>{booking.contact}</td>

                        <td>{booking.guests}</td>

                        <td>{booking.roomType}</td>

                        <td>{booking.numberOfRooms}</td>

                        <td>{booking.checkIn}</td>

                        <td>{booking.checkOut}</td>

                        <td>{booking.paymentMethod}</td>

                        <td>{booking.city}</td>

                              <td ><button onClick={()=>deleteBooking(booking.id)}>Delete  </button>
                <br />
              
                <button onClick={()=>onEdit(booking.id)}>Edit</button></td>
                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="11"
                        className="text-center text-muted"
                      >
                        No booking records found
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CustomerDetails;