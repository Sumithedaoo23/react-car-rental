
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Pages and Components
import Home from "./Mainpage";
import Footer from "./Footer";
import Navigation from "./Nav";
import Vehicles from "./Vehicles";
import About from "./AboutUS";
import Contact from "./ContactUS";
import CarDetails from "./Details";
import BookingPage from "./book";
import Thankyou from "./thankyou";
import Addtocart from "./addtocart";
import LoginPopup from "./loginpop"; // ✅ Import your popup login component

function Routing() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <LoginPopup onLogin={handleLogin} />
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehiclePg" element={<Vehicles />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route path="/addtocart" element={<Addtocart />} />
            <Route path="/aboutUsPg" element={<About />} />
            <Route path="/contactUsPg" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default Routing;
