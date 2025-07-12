import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CarList() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4006/cardetails")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Failed to fetch cars:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Available Cars</h2>
      <div className="row">
        {cars.map((car) => (
          <div key={car._id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`data:image/jpeg;base64,${car.image}`}
                alt={car.carname}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{car.carname}</h5>
                <p>₹{car.charges} / day</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/book/${car._id}`)}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
