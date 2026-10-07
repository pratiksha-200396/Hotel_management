import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Booking() {

  const {register,handleSubmit,reset,formState: { errors }} = useForm();
  let navigate = useNavigate();


  let onSubmit = async(data) => {
    try{
   console.log(data);

      axios.post("http://localhost:8080/save",data);
      alert("booking Successful");
      navigate('/customer-details');
    }
    catch(error){
      console.log(error);
      
    }
  
  };

  return (
    <div>

      {/*  Page che Header */}

      <div className="bg-dark text-white text-center py-5">

        <h1>Room Booking</h1>

        <p className="mb-0">
          Book your room with us
        </p>

      </div>


      {/* Booking Form  */}

      <div className="container py-5">

        <div className="card shadow">

          <div className="card-body p-4">

            <h2 className="text-center mb-4">
              Hotel Booking Form
            </h2>


            <form onSubmit={handleSubmit(onSubmit)}>


              {/* Customer Details */}

              <fieldset className="border p-4 mb-4">

                <legend className="float-none w-auto px-2">
                  Customer Details
                </legend>


                {/* Customer Name */}

                <div className="mb-3">

                  <label className="form-label">
                    Customer Name
                  </label>

                  <input type="text" className="form-control" placeholder="Enter customer name"{...register("customerName", {required: "Customer name is required"})}/>

                  {errors.customerName && (<small className="text-danger">{errors.customerName.message}</small>)}

                </div>


                {/* Email */}

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter valid email"
                      }
                    })}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}

                </div>


                {/* Contact */}

                <div className="mb-3">

                  <label className="form-label">
                    Contact Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter contact number"
                    {...register("contact", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter valid 10 digit number"
                      }
                    })}
                  />

                  {errors.contact && (
                    <small className="text-danger">
                      {errors.contact.message}
                    </small>
                  )}

                </div>


                {/* Number of Guests */}

                <div className="mb-3">

                  <label className="form-label">
                    Number of Guests
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number of guests"
                    {...register("guests", {
                      required: "Number of guests is required",
                      min: {
                        value: 1,
                        message: "At least 1 guest is required"
                      }
                    })}
                  />

                  {errors.guests && (
                    <small className="text-danger">
                      {errors.guests.message}
                    </small>
                  )}

                </div>

              </fieldset>


              {/* ================= Room Details ================= */}

              <fieldset className="border p-4 mb-4">

                <legend className="float-none w-auto px-2">
                  Room Details
                </legend>


                {/* Room Type */}

                <div className="mb-3">

                  <label className="form-label">
                    Room Type
                  </label>

                  <select
                    className="form-select"
                    {...register("roomType", {
                      required: "Please select room type"
                    })}
                  >

                    <option value="">
                      Select Room
                    </option>

                    <option value="Single Room">
                      Single Room - ₹2,000
                    </option>

                    <option value="Double Room">
                      Double Room - ₹3,500
                    </option>

                    <option value="Deluxe Room">
                      Deluxe Room - ₹5,000
                    </option>

                    <option value="Suite Room">
                      Suite Room - ₹7,500
                    </option>

                  </select>

                  {errors.roomType && (
                    <small className="text-danger">
                      {errors.roomType.message}
                    </small>
                  )}

                </div>


                {/* Number of Rooms */}

                <div className="mb-3">

                  <label className="form-label">
                    Number of Rooms
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number of rooms"
                    {...register("numberOfRooms", {
                      required: "Number of rooms is required",
                      min: {
                        value: 1,
                        message: "At least 1 room is required"
                      }
                    })}
                  />

                  {errors.numberOfRooms && (
                    <small className="text-danger">
                      {errors.numberOfRooms.message}
                    </small>
                  )}

                </div>

              </fieldset>


              {/* ================= Stay Details ================= */}

              <fieldset className="border p-4 mb-4">

                <legend className="float-none w-auto px-2">
                  Stay Details
                </legend>


                <div className="row">

                  {/* Check In */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Check-in Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      {...register("checkIn", {
                        required: "Check-in date is required"
                      })}
                    />

                    {errors.checkIn && (
                      <small className="text-danger">
                        {errors.checkIn.message}
                      </small>
                    )}

                  </div>


                  {/* Check Out */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Check-out Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      {...register("checkOut", {
                        required: "Check-out date is required"
                      })}
                    />

                    {errors.checkOut && (
                      <small className="text-danger">
                        {errors.checkOut.message}
                      </small>
                    )}

                  </div>

                </div>


                {/* Payment Method */}

                <div className="mb-3">

                  <label className="form-label">
                    Payment Method
                  </label>

                  <select
                    className="form-select"
                    {...register("paymentMethod", {
                      required: "Please select payment method"
                    })}
                  >

                    <option value="">
                      Select Payment Method
                    </option>

                    <option value="Cash">
                      Cash
                    </option>

                    <option value="UPI">
                      UPI
                    </option>

                    <option value="Card">
                      Card
                    </option>

                  </select>

                  {errors.paymentMethod && (
                    <small className="text-danger">
                      {errors.paymentMethod.message}
                    </small>
                  )}

                </div>

              </fieldset>


              {/* ================= Address ================= */}

              <fieldset className="border p-4 mb-4">

                <legend className="float-none w-auto px-2">
                  Address Details
                </legend>


                {/* Address */}

                <div className="mb-3">

                  <label className="form-label">
                    Address
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter your address"
                    {...register("address", {
                      required: "Address is required"
                    })}
                  ></textarea>

                  {errors.address && (
                    <small className="text-danger">
                      {errors.address.message}
                    </small>
                  )}

                </div>


                <div className="row">

                  {/* City */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      City
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter city"
                      {...register("city", {
                        required: "City is required"
                      })}
                    />

                    {errors.city && (
                      <small className="text-danger">
                        {errors.city.message}
                      </small>
                    )}

                  </div>


                  {/* State */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      State
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter state"
                      {...register("state", {
                        required: "State is required"
                      })}
                    />

                    {errors.state && (
                      <small className="text-danger">
                        {errors.state.message}
                      </small>
                    )}

                  </div>

                </div>


                {/* Pincode */}

                <div className="mb-3">

                  <label className="form-label">
                    Pincode
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pincode"
                    {...register("pincode", {
                      required: "Pincode is required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Enter valid 6 digit pincode"
                      }
                    })}
                  />

                  {errors.pincode && (
                    <small className="text-danger">
                      {errors.pincode.message}
                    </small>
                  )}

                </div>

              </fieldset>


              {/* ================= Special Request ================= */}

              <fieldset className="border p-4 mb-4">

                <legend className="float-none w-auto px-2">
                  Other Details
                </legend>


                <div className="mb-3">

                  <label className="form-label">
                    Special Request
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter any special request"
                    {...register("specialRequest")}
                  ></textarea>

                </div>

              </fieldset>


              {/* ================= Submit ================= */}

              <div className="text-center">

                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5"
                >
                  Book Room
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-lg ms-3 px-5"
                  onClick={() => reset()}
                >
                  Reset
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Booking;