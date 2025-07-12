import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Booked() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [aadharFile, setAadharFile] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    dropoffDate: "",
    pickupLocation: "",
    dropoffLocation: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4006/cardetails/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.error("Car fetch error:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullForm = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      fullForm.append(key, value)
    );
    fullForm.append("carId", id);
    if (aadharFile) fullForm.append("aadharCard", aadharFile);
    if (licenseFile) fullForm.append("drivingLicense", licenseFile);

    axios
      .post("http://localhost:4006/bookings", fullForm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => setBookingConfirmed(true))
      .catch((err) => {
        console.error("Booking failed:", err);
        alert("Booking failed.");
      });
  };

  if (!car) return <div>Loading car details...</div>;

  return (
    <div className="container mt-5">
      {!bookingConfirmed ? (
        <>
          <h2>Book: {car.carname}</h2>
          <img
            src={`data:image/jpeg;base64,${car.image}`}
            alt={car.carname}
            style={{ width: "300px" }}
          />
          <p>Price: ₹{car.charges}/day</p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              {["name", "email", "phone", "pickupLocation", "dropoffLocation"].map((field, idx) => (
                <div key={idx} className="col-md-6 mb-3">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="form-control"
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <div className="col-md-6 mb-3">
                <input
                  type="date"
                  name="pickupDate"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="date"
                  name="dropoffDate"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Upload Aadhar Card</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="form-control"
                  onChange={(e) => setAadharFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Upload Driving License</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="form-control"
                  onChange={(e) => setLicenseFile(e.target.files[0])}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Confirm Booking
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-success mt-5">✅ Booking Confirmed!</h2>
          <p className="lead">Thank you for booking your ride with us.</p>
          <p>We hope you have a smooth and enjoyable journey.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Thank You"
            style={{ width: "120px", marginTop: "20px" }}
          />
          <h4 className="mt-4">Visit again for your next trip! 🚗</h4>
        </div>
      )}
    </div>
  );
}

export default Booked;
