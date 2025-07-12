import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
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
    const localCar = localStorage.getItem("selectedCar");
    if (localCar) {
      setCar(JSON.parse(localCar));
      localStorage.removeItem("selectedCar");
    } else {
      axios
        .get(`http://localhost:4006/cardetails/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.error("Fetch car failed:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullForm = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      fullForm.append(key, value)
    );
    fullForm.append("carId", id);
    if (aadharFile) fullForm.append("aadharCard", aadharFile);
    if (licenseFile) fullForm.append("drivingLicense", licenseFile);

    try {
      await axios.post("http://localhost:4006/bookings", fullForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Redirect to the correct thank-you route
      // navigate("/thank-you");
      navigate("/thank-you", {
        state: {
          name: formData.name,
          email: formData.email,
          pickupDate: formData.pickupDate,
        },
      });
    } catch (err) {
      console.error("Booking failed:", err);
      if (err.response) {
        console.error("Server responded with:", err.response.data);
        alert("Booking failed: " + err.response.data.error);
      } else {
        alert("Booking failed: Server not reachable");
      }
    }
  };

  if (!car) return <div className="text-center my-5">Loading car data...</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Book: {car.carname}</h2>

      <div className="row mb-5">
        <div className="col-md-6 text-center mb-4">
          {/* <img
            src={`data:image/jpeg;base64,${car.image}`}
            alt={car.carname}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px" }}
          /> */}
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
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Price:</strong> ₹{car.charges}/day
            </li>
            <li className="list-group-item">
              <strong>Fuel Type:</strong> {car.fueltype}
            </li>
            <li className="list-group-item">
              <strong>AC/NonAC:</strong> {car.acnonac}
            </li>
            <li className="list-group-item">
              <strong>Seats:</strong> {car.seats}
            </li>
            <li className="list-group-item">
              <strong>Car Type:</strong> {car.cartype}
            </li>
            <li className="list-group-item">
              <strong>Allowed Distance:</strong> {car.distance} km
            </li>
          </ul>
        </div>
      </div>

      <div className="card shadow p-4 mb-5">
        <h4 className="mb-4 text-center">Fill Booking Details</h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </div>
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
              <input
                type="text"
                name="pickupLocation"
                className="form-control"
                placeholder="Pickup Location"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="dropoffLocation"
                className="form-control"
                placeholder="Dropoff Location"
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

          <button type="submit" className="btn btn-success w-100 mt-3">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
