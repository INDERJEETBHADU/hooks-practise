import React from "react";
import { useLocation } from "react-router-dom";

function LocationDisplay() {
  const location = useLocation();

  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h2>Current Location</h2>
      <p>
        <strong>Pathname:</strong> {location.pathname}
      </p>
      <p>
        <strong>Search:</strong> {location.search}
      </p>
      <p>
        <strong>Hash:</strong> {location.hash}
      </p>
    </div>
  );
}

export default LocationDisplay;
