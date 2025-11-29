// src/pages/HostsPage.jsx
import React from "react";

export default function HostsPage() {
  const tools = [
    {
      title: "Listing Manager",
      text: "Create new homestays, update photos, amenities and house rules.",
    },
    {
      title: "Pricing & Offers",
      text: "Set dynamic pricing, weekend rates and custom coupons for students.",
    },
    {
      title: "Booking Calendar",
      text: "See upcoming bookings in a calendar view and block unavailable dates.",
    },
    {
      title: "Reviews & Ratings",
      text: "Respond to guest reviews and improve your visibility on the platform.",
    },
  ];

  const perks = [
    "No coding needed — fully managed platform",
    "Detailed analytics for views, bookings and payouts",
    "Support team to help with disputes and cancellations",
    "Higher boost for well-rated, responsive hosts",
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
          Host Dashboard
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: "640px" }}>
          Turn your home, apartment or spare room into a smart income source.
          Homestay Explorer gives you all the tools to manage listings, prices
          and guests — in one simple dashboard.
        </p>

        <div className="row g-4 mt-4">
          {tools.map((tool, i) => (
            <div key={i} className="col-md-6">
              <div
                style={{
                  borderRadius: "18px",
                  background: "rgba(15,23,42,0.96)",
                  border: "1px solid rgba(34,197,94,0.6)",
                  padding: "18px 18px 12px",
                  color: "#e5e7eb",
                  height: "100%",
                }}
              >
                <h5 className="mb-2" style={{ color: "#4ade80" }}>
                  {tool.title}
                </h5>
                <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
                  {tool.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4"
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,rgba(16,185,129,0.2),rgba(8,47,73,0.95))",
            border: "1px solid rgba(34,197,94,0.9)",
            padding: "18px 18px 14px",
            color: "#e5e7eb",
          }}
        >
          <h4 className="mb-2" style={{ fontWeight: 600 }}>
            Why host with Homestay Explorer?
          </h4>
          <ul
            style={{
              paddingLeft: "1.1rem",
              marginBottom: 0,
              fontSize: "0.9rem",
            }}
          >
            {perks.map((p, i) => (
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
