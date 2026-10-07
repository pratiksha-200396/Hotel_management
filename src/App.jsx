import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import Booking from "./Pages/Booking";
import CustomerDetails from "./Pages/CustomerDetails";
import Contact from "./Pages/Contact";
import UpdateBooking from "./Pages/UpdateBooking";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About />} />

        <Route path="/rooms" element={<Rooms/>} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/updatebooking/:id" element={<UpdateBooking/>}/>

        <Route
          path="/customer-details"
          element={<CustomerDetails />}/>

        <Route path="/contact" element={<Contact/>} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;