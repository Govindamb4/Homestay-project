// src/pages/RolesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RolesPage() {
  const navigate = useNavigate();

  const roles = [
    {
      key: "admin",
      title: "Admin",
      description:
        "Oversees platform operations, manages content, users and site security.",
      points: [
        "Approve / reject new homestays",
        "Monitor bookings & revenue",
        "Handle reports & safety flags",
      ],
      action: "Open Admin Dashboard",
      onClick: () => navigate("/admin"),
      color: "#22d3ee",
    },
    {
      key: "host",
      title: "Host",
      description:
        "Hosts homestays, manages property listings, pricing and booking details.",
      points: [
        "Create and manage listings",
        "Set seasonal pricing & offers",
        "View bookings & guest reviews",
      ],
      action: "View Host Tools",
      onClick: () => navigate("/hosts"),
      color: "#22c55e",
    },
    {
      key: "tourist",
      title: "Tourist",
      description:
        "Searches and books stays, leaves reviews and explores local attractions.",
      points: [
        "Search homestays across India",
        "View nearby attractions & guides",
        "Track bookings & save favourites",
      ],
      action: "Explore as Tourist",
      onClick: () => navigate("/tourist"), // 🔹 Tourist button added
      color: "#a855f7",
    },
    {
      key: "guide",
      title: "Guide",
      description:
        "Offers local experiences, tours and activities to visiting tourists.",
      points: [
        "Create experience packages",
        "Schedule city / nature tours",
        "Chat with interested travellers",
      ],
      action: "View Local Guides",
      onClick: () => navigate("/local-guides"),
      color: "#f97316",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617, #020617 40%, #020617 100%)",
        paddingTop: "90px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-2"
          style={{ color: "#f9fafb", fontWeight: 800 }}
        >
          Platform Roles
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#9ca3af", fontSize: "0.95rem" }}
        >
          Different users, one platform — admins, hosts, tourists and guides
          work together to make <span style={{ color: "#22d3ee" }}>Homestay Explorer</span> run smoothly.
        </p>

        <div className="row g-4">
          {roles.map((role) => (
            <div key={role.key} className="col-md-6 col-lg-3">
              <div
                className="h-100 d-flex flex-column justify-content-between"
                style={{
                  borderRadius: "20px",
                  background: "rgba(15,23,42,0.96)",
                  border: `1px solid ${role.color}55`,
                  boxShadow: `0 16px 40px ${role.color}55`,
                  padding: "20px 18px 18px",
                }}
              >
                <div>
                  <h4
                    className="mb-2 text-center"
                    style={{ color: "#f9fafb", fontWeight: 700 }}
                  >
                    {role.title}
                  </h4>
                  <p
                    className="mb-3 text-center"
                    style={{ color: "#e5e7eb", fontSize: "0.88rem" }}
                  >
                    {role.description}
                  </p>
                  <ul
                    style={{
                      color: "#cbd5f5",
                      fontSize: "0.86rem",
                      paddingLeft: "1.1rem",
                    }}
                  >
                    {role.points.map((p, idx) => (
                      <li key={idx} className="mb-1">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn mt-3 w-100"
                  onClick={role.onClick}
                  style={{
                    borderRadius: "999px",
                    background: role.color,
                    border: "none",
                    color: "#020617",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {role.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
