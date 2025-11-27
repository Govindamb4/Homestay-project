import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Roles from "../components/Roles";
import { listings } from "../data/sampleData";

export default function HomePage() {
  // Regions for the slider
  const regions = [
    "Andhra Pradesh",
    "Himachal Pradesh",
    "Uttarakhand",
    "Bihar",
    "Goa",
    "Rajasthan",
    "Kerala",
  ];

  const [regionIndex, setRegionIndex] = useState(0);
  const selectedRegion = regions[regionIndex];
  const navigate = useNavigate();

  // Filter listings according to selected region/state
  const filteredListings = useMemo(
    () =>
      listings.filter((listing) =>
        listing.location
          ? listing.location
              .toLowerCase()
              .includes(selectedRegion.toLowerCase())
          : false
      ),
    [selectedRegion]
  );

  return (
    <>
      {/* Existing hero section */}
      <Hero />

      {/* Interactive homestay-by-region section */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-3 text-info">
            Explore Homestays by Region
          </h2>
          <p className="text-center mb-4">
            Slide to choose a region and instantly see homestays available
            there.
          </p>

          {/* Slider control for region */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Selected Region:{" "}
              <span className="text-info">{selectedRegion}</span>
            </label>

            <input
              type="range"
              className="form-range"
              min="0"
              max={regions.length - 1}
              value={regionIndex}
              onChange={(e) => setRegionIndex(Number(e.target.value))}
            />

            <div className="d-flex flex-wrap justify-content-between small mt-2">
              {regions.map((region, idx) => (
                <span
                  key={region}
                  className={
                    "badge mb-1 " +
                    (idx === regionIndex
                      ? "bg-info text-dark"
                      : "bg-secondary")
                  }
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Homestay cards filtered by region */}
          <div className="row">
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="col-md-4 col-lg-3 mb-4 d-flex"
                >
                  <div className="card bg-dark text-light shadow-sm w-100">
                    {listing.image && (
                      <img
                        src={listing.image}
                        className="card-img-top"
                        alt={listing.title}
                      />
                    )}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-info">
                        {listing.title}
                      </h5>
                      <p className="small mb-1">{listing.location}</p>
                      <p className="small flex-grow-1">
                        {listing.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        {listing.price && (
                          <span className="fw-bold">
                            ₹{listing.price}/night
                          </span>
                        )}
                        <Link
                          to={`/listing/${listing.id}`}
                          className="btn btn-outline-info btn-sm"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // If no homestays for that region
              <div className="col-12 text-center py-4">
                <p className="text-muted mb-2">
                  No homestays found for this region yet.
                </p>
                <button
                  className="btn btn-outline-info btn-sm"
                  onClick={() => navigate("/search")}
                >
                  Browse all stays
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Existing roles section */}
      <Roles />
    </>
  );
}
