import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import "./Vehicles.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Vehicles() {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4006/cardetails")
      .then((res) => {
        console.log("Fetched cars:", res.data);
        setCarData(res.data);
      })
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  const handleClick = (carId) => {
    console.log("Navigating to car details page with ID:", carId);
    navigate(`/car/${carId}`);
  };

  return (
    <>
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {carData.map((car, idx) => (
            <Col xs={12} sm={6} lg={4} key={idx} data-aos="fade-up">
              <div className="vehicle-box p-3 shadow-sm rounded text-center">
                <div className="vehicle-image mb-3">
                  <img
                    src={
                      car.image.startsWith("data:image")
                        ? car.image
                        : `data:image/jpeg;base64,${car.image}`
                    }
                    alt={car.carname}
                    className="img-fluid vehicle-img"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center px-2">
                  <div className="text-start">
                    <strong>{car.carname}</strong>
                    <br />
                    <span>{car.cartype}</span>
                  </div>
                  <div className="text-end">
                    <strong className="text-price">₹{car.charges}</strong>
                    <br />
                    <span>per day</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-muted px-2 mt-3 mb-3">
                  <span>{car.fueltype}</span>
                  <span>{car.seats} Seats</span>
                  <span>{car.acnonac}</span>
                </div>
                <button
                  className="btn btn-primary w-100 view-details-btn"
                  onClick={() => handleClick(car._id)}
                >
                  View Details
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Vehicles;
