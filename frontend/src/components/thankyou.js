import React from "react";
import { useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const { name, email, pickupDate } = location.state || {};

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)" }}
    >
      <div
        className="text-center p-5 shadow rounded"
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "3rem", color: "#28a745" }}>✅</div>
        <h2 className="mt-3" style={{ color: "#333" }}>
          Thank you, {name || "Customer"}!
        </h2>
        <p className="mt-3" style={{ fontSize: "1.1rem", color: "#555" }}>
          Your booking has been confirmed.
        </p>
        <p>
          🚗 <strong>Pickup Date:</strong> {pickupDate || "N/A"}
        </p>
        <p>
          📧 <strong>Confirmation sent to:</strong> {email || "N/A"}
        </p>
        <hr />
        <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#888" }}>
          We’ll reach out soon with further details.
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
