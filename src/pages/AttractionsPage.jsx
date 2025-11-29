// src/pages/AttractionsPage.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { attractions } from "../data/attractionsData";

// Map each attraction id → state/region label for filters + badges
function getRegionForAttraction(id) {
  if (id >= 1 && id <= 3) return "Andhra Pradesh";
  if (id >= 4 && id <= 5) return "Goa";
  if (id >= 6 && id <= 7) return "Kerala";
  if (id >= 8 && id <= 9) return "Himachal Pradesh";
  if (id >= 10 && id <= 11) return "Rajasthan";
  if (id === 12) return "Sikkim";
  return "Other";
}

const REGIONS = [
  "All",
  "Andhra Pradesh",
  "Goa",
  "Kerala",
  "Himachal Pradesh",
  "Rajasthan",
  "Sikkim",
];

export default function AttractionsPage() {
  const navigate = useNavigate();
  const [regionFilter, setRegionFilter] = useState("All");

  // Add region field but keep your original image URLs
  const enhancedAttractions = useMemo(
    () =>
      attractions.map((a) => ({
        ...a,
        region: getRegionForAttraction(a.id),
      })),
    []
  );

  const filteredAttractions = useMemo(() => {
    if (regionFilter === "All") return enhancedAttractions;
    return enhancedAttractions.filter((a) => a.region === regionFilter);
  }, [regionFilter, enhancedAttractions]);

  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617, #020617 40%, #020c1b 100%)",
        paddingTop: "90px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        {/* TITLE */}
        <h2
          className="text-center mb-2"
          style={{ color: "#f9fafb", fontWeight: 800 }}
        >
          Local Attractions
        </h2>
        <p
          className="text-center mb-4"
          style={{ color: "#9ca3af", fontSize: "0.95rem" }}
        >
          Discover temples, beaches, hill stations and heritage sites you can
          explore while staying with{" "}
          <span style={{ color: "#22d3ee" }}>Homestay Explorer</span>.
        </p>

        {/* REGION FILTER */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {REGIONS.map((region) => (
            <button
              key={region}
              className="btn btn-sm"
              onClick={() => setRegionFilter(region)}
              style={{
                borderRadius: "999px",
                border:
                  regionFilter === region
                    ? "none"
                    : "1px solid rgba(148,163,184,0.6)",
                background:
                  regionFilter === region
                    ? "linear-gradient(135deg,#22d3ee,#22c55e)"
                    : "rgba(15,23,42,0.95)",
                color: regionFilter === region ? "#020617" : "#e5e7eb",
                fontSize: "0.8rem",
                padding: "6px 14px",
                fontWeight: regionFilter === region ? 700 : 500,
              }}
            >
              {region}
            </button>
          ))}
        </div>

        {/* ATTRACTION CARDS */}
        <div className="row g-4">
          {filteredAttractions.map((a) => (
            <div key={a.id} className="col-md-6 col-lg-4">
              <div
                className="h-100 d-flex flex-column"
                style={{
                  borderRadius: "20px",
                  background: "rgba(15,23,42,0.98)",
                  border: "1px solid rgba(148,163,184,0.5)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.85)",
                  overflow: "hidden",
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    height: "210px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {a.image ? (
                    <>
                      <img
                        src={a.image}
                        alt={a.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transform: "scale(1.03)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top,rgba(15,23,42,0.9),rgba(15,23,42,0.1))",
                        }}
                      />
                    </>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(135deg,#22d3ee33,#22c55e33,#0f172a)",
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 12,
                      right: 12,
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        color: "#f9fafb",
                        fontWeight: 700,
                        textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                      }}
                    >
                      {a.name}
                    </h5>
                    <div
                      style={{
                        color: "#a5f3fc",
                        fontSize: "0.85rem",
                        textShadow: "0 2px 4px rgba(0,0,0,0.9)",
                      }}
                    >
                      {a.location}
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-3 d-flex flex-column flex-grow-1">
                  <p
                    className="mb-2"
                    style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                  >
                    {a.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "rgba(30,64,175,0.75)",
                        color: "#bfdbfe",
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {a.region}
                    </span>
                    <span
                      className="small"
                      style={{ color: "#9ca3af", fontSize: "0.75rem" }}
                    >
                      Perfect for 1–2 day trips
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2 mt-auto">
                    <button
                      className="btn btn-sm flex-fill"
                      onClick={() => navigate("/map")}
                      style={{
                        borderRadius: "999px",
                        border: "none",
                        background:
                          "linear-gradient(135deg,#22c55e,#22d3ee,#22c55e)",
                        color: "#020617",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                      }}
                    >
                      View on Map
                    </button>
                    <button
                      className="btn btn-sm flex-fill"
                      onClick={() => navigate("/search")}
                      style={{
                        borderRadius: "999px",
                        border: "1px solid #22d3ee",
                        backgroundColor: "transparent",
                        color: "#e5e7eb",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                      }}
                    >
                      Nearby homestays
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredAttractions.length === 0 && (
            <div className="col-12">
              <p className="text-center" style={{ color: "#9ca3af" }}>
                No attractions found for this filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
