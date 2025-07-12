import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

function Addtocart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const removeCar = (id) => {
    const updated = cartItems.filter((car) => car._id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const bookCar = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    navigate(`/book/${car._id}`);
  };

  if (cartItems.length === 0)
    return (
      <div className="text-center my-5">No cars in your booking cart.</div>
    );

  return (
    <div className="container mt-5">
      <h2>Your Booking Cart</h2>
      <div className="row">
        {cartItems.map((car) => (
          <div className="col-md-4 mb-4" key={car._id}>
            <div className="card">
              <img
                src={
                  car.image.startsWith("data:image")
                    ? car.image
                    : `data:image/jpeg;base64,${car.image}`
                }
                alt={car.carname}
                className="img-fluid vehicle-img"
              />
              <div className="card-body">
                <h5 className="card-title">{car.carname}</h5>
                <p className="card-text">Type: {car.cartype}</p>
                <p>
                  AC: {car.acnonac} | Fuel: {car.fueltype}
                </p>
                <p>Seats: {car.seats}</p>
                <h6>₹{car.charges}/day</h6>

                <button
                  className="btn btn-danger me-2"
                  onClick={() => removeCar(car._id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => bookCar(car)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addtocart;
