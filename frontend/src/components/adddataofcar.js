import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function AddCoffeeItem() {
  const [carname, setCarname] = useState("");
  const [charges, setCharges] = useState("");
  const [cartype, setCartype] = useState("");
  const [fueltype, setFueltype] = useState("");
  const [acnonac, setAcnonac] = useState("");
  const [seats, setSeats] = useState("");
  const [distance, setDistance] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !imageFile) {
      alert("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("carname", carname);
    formData.append("charges", charges);
    formData.append("cartype", cartype);
    formData.append("fueltype", fueltype);
    formData.append("acnonac", acnonac);
    formData.append("seats", seats);
    formData.append("distance", distance);
    formData.append("image", imageFile);

    try {
      const res = await axios.post("http://localhost:4006/cardetails", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newCar = res.data;
      const createdCarId = newCar._id;

      // ✅ Save to localStorage temporarily
      localStorage.setItem("selectedCar", JSON.stringify(newCar));

      alert("Car added and stored. Redirecting to booking...");
      // navigate(`/book/${createdCarId}`);
    } catch (err) {
      console.error("Car add failed:", err);
      alert("Car upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }} encType="multipart/form-data">
      <h2>Add Car Details</h2>

      <input type="text" placeholder="Car Name" value={carname} onChange={(e) => setCarname(e.target.value)} required /><br /><br />
      <input type="text" placeholder="Per day charges" value={charges} onChange={(e) => setCharges(e.target.value)} required /><br /><br />

      <h3>Technical Specifications</h3>
      <input type="text" placeholder="Car Type" value={cartype} onChange={(e) => setCartype(e.target.value)} required /><br /><br />
      <input type="text" placeholder="Fuel Type" value={fueltype} onChange={(e) => setFueltype(e.target.value)} required /><br /><br />
      <input type="text" placeholder="AC/NonAC" value={acnonac} onChange={(e) => setAcnonac(e.target.value)} required /><br /><br />
      <input type="text" placeholder="Seats (e.g. 4, 6)" value={seats} onChange={(e) => setSeats(e.target.value)} required /><br /><br />
      <input type="text" placeholder="Distance (km)" value={distance} onChange={(e) => setDistance(e.target.value)} required /><br /><br />

      <h3>Upload Car Image</h3>
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required /><br /><br />

      <button type="submit" className="btn btn-success w-100">Rent This Car</button>
    </form>
  );
}

export default AddCoffeeItem;
