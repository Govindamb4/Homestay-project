// src/pages/ListingDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { listings } from "../data/sampleData";

export default function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const listing = listings.find((l) => l.id === Number(id));

  if (!listing) {
    return (
      <div className="container py-5">
        <h3>Listing not found</h3>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate("/payment", {
      state: { listing },
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img
              src={listing.image}
              alt={listing.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-5">
            <h2>{listing.title}</h2>
            <p className="text-muted">{listing.location}</p>
            <p>{listing.description}</p>
            <p>
              <strong>Price:</strong> ₹{listing.price}/night
            </p>
            <p>
              <strong>Rating:</strong> {listing.rating} ⭐
            </p>
            <button className="btn btn-primary" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
