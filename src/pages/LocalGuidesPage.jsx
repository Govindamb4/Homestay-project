// src/pages/LocalGuidesPage.jsx
import React from "react";

export default function LocalGuidesPage() {
  const experiences = [
    {
      name: "Old City Food Walk",
      city: "Hyderabad",
      desc: "Evening street-food trail through Charminar & Laad Bazaar with a local guide.",
      price: "₹699 per person",
    },
    {
      name: "Sunrise Trek & Campfire",
      city: "Bengaluru outskirts",
      desc: "Night trek, sunrise viewpoint and campfire music session.",
      price: "₹999 per person",
    },
    {
      name: "Fort & Heritage Tour",
      city: "Jaipur",
      desc: "Guided tour of Amer Fort, City Palace and local handicraft markets.",
      price: "₹849 per person",
    },
  ];

  const sellingPoints = [
    "Monetize your local knowledge and storytelling skills.",
    "Create flexible schedules — weekend or weekday tours.",
    "Get matched with tourists staying in nearby homestays.",
    "Build ratings over time to appear higher in search.",
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
          Local Guides & Experiences
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: "640px" }}>
          Guides make trips unforgettable. As a local guide, you can design
          walking tours, treks, cultural experiences or food trails that connect
          tourists with your city.
        </p>

        <div className="row g-4 mt-4">
          {experiences.map((exp, i) => (
            <div key={i} className="col-md-4">
              <div
                style={{
                  borderRadius: "18px",
                  background: "rgba(15,23,42,0.96)",
                  border: "1px solid rgba(249,115,22,0.8)",
                  padding: "18px 18px 14px",
                  color: "#e5e7eb",
                  height: "100%",
                }}
              >
                <h5 className="mb-1" style={{ color: "#fdba74" }}>
                  {exp.name}
                </h5>
                <div
                  className="mb-1"
                  style={{ fontSize: "0.82rem", color: "#f97316" }}
                >
                  {exp.city}
                </div>
                <p
                  className="mb-2"
                  style={{ fontSize: "0.9rem", minHeight: "70px" }}
                >
                  {exp.desc}
                </p>
                <div
                  className="small fw-semibold"
                  style={{ color: "#fed7aa" }}
                >
                  {exp.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4"
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,rgba(249,115,22,0.25),rgba(15,23,42,0.98))",
            border: "1px solid rgba(249,115,22,0.9)",
            padding: "18px 18px 14px",
            color: "#e5e7eb",
          }}
        >
          <h4 className="mb-2" style={{ fontWeight: 600 }}>
            Why become a guide on Homestay Explorer?
          </h4>
          <ul
            style={{
              paddingLeft: "1.1rem",
              marginBottom: 0,
              fontSize: "0.9rem",
            }}
          >
            {sellingPoints.map((p, i) => (
              <li key={i} className="mb-1">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
