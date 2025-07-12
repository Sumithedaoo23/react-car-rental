import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Details.css";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4006/cardetails/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load car details");
      });
  }, [id]);

  const handleRent = () => {
    if (!car) return;

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const alreadyInCart = existingCart.some((item) => item._id === car._id);
    if (!alreadyInCart) {
      existingCart.push(car);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    }

    localStorage.setItem("selectedCar", JSON.stringify(car));
    navigate(`/book/${car._id}`);
  };

  if (error) return <div className="text-danger text-center">{error}</div>;
  if (!car) return <div className="text-center my-5">Loading car data...</div>;

  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f6f9ff" }}
    >
      <h2 className="text-center mb-5 fw-bold fade-in">🚘 Car Details</h2>
      <div className="row align-items-center fade-in">
        <div className="col-md-6 text-center mb-4">
          
          <img
            src={
              car.image.startsWith("data:image")
                ? car.image
                : `data:image/jpeg;base64,${car.image}`
            }
            alt={car.carname}
            className="car-img hover-zoom"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold">{car.carname}</h3>
          <p>
            <strong>Type:</strong> {car.cartype}
          </p>
          <p>
            <strong>Fuel:</strong> {car.fueltype}
          </p>
          <p>
            <strong>AC/NonAC:</strong> {car.acnonac}
          </p>
          <p>
            <strong>Seats:</strong> {car.seats}
          </p>
          <h4 className="text-success mt-3 mb-4">
            ₹{car.charges} <small>/ day</small>
          </h4>
          <button
            onClick={handleRent}
            className="btn btn-lg btn-success w-100"
            style={{ padding: "12px 0", fontSize: "1.1rem" }}
          >
            🚗 Rent This Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
