// src/pages/TouristPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TouristPage() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Find your perfect stay",
      text: "Filter by location, price, rating and amenities to discover the ideal homestay.",
      action: "Search Homestays",
      onClick: () => navigate("/search"),
    },
    {
      title: "Explore nearby attractions",
      text: "Browse curated tourist spots, food joints and experiences near your stay.",
      action: "View Attractions",
      onClick: () => navigate("/attractions"),
    },
    {
      title: "Use interactive map",
      text: "Click on the map to see nearest homestays, distance & travel time.",
      action: "Open Map",
      onClick: () => navigate("/map"),
    },
  ];

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
        <h2
          className="mb-2"
          style={{ color: "#f9fafb", fontWeight: 800, letterSpacing: "0.5px" }}
        >
          Tourist Experience
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: "640px" }}>
          As a tourist, you can search, compare and book verified homestays,
          while also exploring trusted local attractions, guides and
          experiences.
        </p>

        <div className="row g-4 mt-4">
          {cards.map((c, i) => (
            <div key={i} className="col-md-4">
              <div
                className="d-flex flex-column h-100"
                style={{
                  borderRadius: "18px",
                  background: "rgba(15,23,42,0.96)",
                  border: "1px solid rgba(129,140,248,0.7)",
                  padding: "18px 18px 14px",
                  color: "#e5e7eb",
                }}
              >
                <h5 className="mb-2" style={{ color: "#a855f7" }}>
                  {c.title}
                </h5>
                <p
                  style={{
                    fontSize: "0.9rem",
                    flexGrow: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {c.text}
                </p>
                <button
                  className="btn btn-sm"
                  onClick={c.onClick}
                  style={{
                    alignSelf: "flex-start",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg,#a855f7,#22d3ee,#a855f7)",
                    border: "none",
                    color: "#020617",
                    fontWeight: 600,
                  }}
                >
                  {c.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4"
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,rgba(56,189,248,0.2),rgba(15,23,42,0.98))",
            border: "1px solid rgba(56,189,248,0.9)",
            padding: "18px 18px 14px",
            color: "#e5e7eb",
          }}
        >
          <h4 className="mb-2" style={{ fontWeight: 600 }}>
            Smart tips for tourists
          </h4>
          <ul
            style={{
              paddingLeft: "1.1rem",
              marginBottom: 0,
              fontSize: "0.9rem",
            }}
          >
            <li>Always check recent reviews before booking.</li>
            <li>
              Use the map view to estimate distance from college, office or
              tourist spots.
            </li>
            <li>
              Look for hosts with fast response time and higher ratings for a
              smoother experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
