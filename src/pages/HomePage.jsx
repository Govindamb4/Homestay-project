// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { listings } from "../data/sampleData";

export default function HomePage() {
  const navigate = useNavigate();

  const featuredListings = listings.slice(0, 3); // show first 3 homestays

  const roles = [
    {
      key: "admin",
      title: "Admin",
      description: "Manage platform content, users, reports and listings.",
      action: "Open Admin Center",
      color: "#22d3ee",
      onClick: () => navigate("/admin"),
    },
    {
      key: "host",
      title: "Homestay Host",
      description: "List homestays, manage bookings and track earnings.",
      action: "Open Host Dashboard",
      color: "#22c55e",
      onClick: () => navigate("/hosts"),
    },
    {
      key: "tourist",
      title: "Tourist",
      description: "Search and book stays, view attractions and reviews.",
      action: "Explore as Tourist",
      color: "#a855f7",
      onClick: () => navigate("/tourist"),
    },
    {
      key: "guide",
      title: "Local Guide",
      description: "Offer tours, experiences and curated local activities.",
      action: "View Guide Tools",
      color: "#f97316",
      onClick: () => navigate("/local-guides"),
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#020617",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          paddingTop: "90px",
          paddingBottom: "50px",
          background:
            "radial-gradient(circle at top, #020617, #020617 35%, #020c1b 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-7">
              <h1
                className="mb-3"
                style={{
                  color: "#f9fafb",
                  fontWeight: 800,
                  fontSize: "2.4rem",
                  letterSpacing: "1px",
                }}
              >
                Find smart homestays{" "}
                <span style={{ color: "#22d3ee" }}>near colleges</span>,{" "}
                <span style={{ color: "#22c55e" }}>work hubs</span> &{" "}
                <span style={{ color: "#a855f7" }}>tourist spots</span>.
              </h1>
              <p
                className="mb-4"
                style={{ color: "#cbd5f5", fontSize: "0.98rem", maxWidth: 600 }}
              >
                Homestay Explorer helps students, families and travellers
                discover verified stays with transparent pricing, real reviews
                and nearby attractions on an interactive map.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <button
                  className="btn"
                  onClick={() => navigate("/search")}
                  style={{
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg,#22c55e,#22d3ee,#22c55e)",
                    border: "none",
                    color: "#020617",
                    fontWeight: 700,
                    paddingInline: "26px",
                  }}
                >
                  Search Homestays
                </button>
                <button
                  className="btn btn-outline-info"
                  onClick={() => navigate("/map")}
                  style={{
                    borderRadius: "999px",
                    borderColor: "#22d3ee",
                    color: "#e5e7eb",
                    fontWeight: 600,
                    paddingInline: "22px",
                  }}
                >
                  View on Map
                </button>
              </div>

              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div
                    style={{
                      color: "#22c55e",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    120+
                  </div>
                  <div style={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    Active homestays
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#22d3ee",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    4.7★
                  </div>
                  <div style={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    Avg guest rating
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#a855f7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    Pan-India
                  </div>
                  <div style={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                    Coverage across India
                  </div>
                </div>
              </div>
            </div>

            {/* Small hero visual card */}
            <div className="col-md-5">
              <div
                style={{
                  borderRadius: "24px",
                  background:
                    "radial-gradient(circle at top left,#22d3ee33,#22c55e22,#020617)",
                  border: "1px solid rgba(148,163,184,0.5)",
                  padding: "18px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                }}
              >
                <h5
                  className="mb-2"
                  style={{ color: "#e5e7eb", fontWeight: 600 }}
                >
                  Why Homestay Explorer?
                </h5>
                <ul
                  style={{
                    color: "#cbd5f5",
                    fontSize: "0.9rem",
                    paddingLeft: "1.1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <li>Verified listings curated for students & families.</li>
                  <li>Integrated map to see distance from key locations.</li>
                  <li>Host and guide ecosystem for complete experiences.</li>
                </ul>
                <p
                  className="small mb-0"
                  style={{ color: "#9ca3af", fontSize: "0.8rem" }}
                >
                  Tip: Login to receive email updates about nearest homestays
                  and exclusive seasonal offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED HOMESTAYS */}
      <section
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
          backgroundColor: "#020617",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3
              className="mb-0"
              style={{ color: "#f9fafb", fontWeight: 700, fontSize: "1.4rem" }}
            >
              Featured homestays near you
            </h3>
            <button
              className="btn btn-sm btn-outline-info"
              onClick={() => navigate("/search")}
              style={{
                borderRadius: "999px",
                borderColor: "#22d3ee",
                color: "#e5e7eb",
                fontSize: "0.8rem",
              }}
            >
              View all
            </button>
          </div>

          <div className="row g-3">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="col-md-4">
                <div
                  className="h-100 d-flex flex-column"
                  style={{
                    borderRadius: "18px",
                    background: "rgba(15,23,42,0.96)",
                    border: "1px solid rgba(148,163,184,0.6)",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: "170px", overflow: "hidden" }}>
                    <img
                      src={listing.image}
                      alt={listing.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="p-3 d-flex flex-column flex-grow-1">
                    <h5
                      className="mb-1"
                      style={{ color: "#22d3ee", fontWeight: 600 }}
                    >
                      {listing.title}
                    </h5>
                    <div
                      className="small mb-1"
                      style={{ color: "#a5f3fc" }}
                    >
                      {listing.location}
                    </div>
                    <p
                      className="mb-2"
                      style={{ color: "#e5e7eb", fontSize: "0.86rem" }}
                    >
                      {listing.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div
                        style={{
                          color: "#f9fafb",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                        }}
                      >
                        ₹{listing.price}/night
                      </div>
                      <button
                        className="btn btn-sm"
                        onClick={() => navigate(`/listing/${listing.id}`)}
                        style={{
                          borderRadius: "999px",
                          border: "1px solid #22d3ee",
                          color: "#e5e7eb",
                          backgroundColor: "transparent",
                          fontSize: "0.8rem",
                          paddingInline: "14px",
                        }}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USER ROLES SECTION (CARDS CLICKABLE) */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "60px",
          background:
            "linear-gradient(180deg,#111827 0%,#1f2937 50%,#020617 100%)",
        }}
      >
        <div className="container">
          <h3
            className="text-center mb-4"
            style={{ color: "#f9fafb", fontWeight: 700 }}
          >
            User Roles
          </h3>

          <div className="row g-3">
            {roles.map((role) => (
              <div key={role.key} className="col-md-6 col-lg-3">
                <button
                  className="w-100 text-start"
                  onClick={role.onClick}
                  style={{
                    borderRadius: "18px",
                    border: `1px solid ${role.color}66`,
                    background: "rgba(15,23,42,0.95)",
                    padding: "16px 14px 14px",
                    color: "#e5e7eb",
                    cursor: "pointer",
                    boxShadow: `0 12px 30px ${role.color}44`,
                  }}
                >
                  <div
                    className="mb-1"
                    style={{ color: role.color, fontWeight: 700 }}
                  >
                    {role.title}
                  </div>
                  <div
                    className="mb-3"
                    style={{ fontSize: "0.9rem", color: "#e5e7eb" }}
                  >
                    {role.description}
                  </div>
                  <span
                    className="small"
                    style={{ color: "#020617", fontWeight: 600 }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        borderRadius: "999px",
                        backgroundColor: role.color,
                        padding: "4px 10px",
                        fontSize: "0.78rem",
                      }}
                    >
                      {role.action} →
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
