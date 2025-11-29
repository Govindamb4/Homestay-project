// src/pages/AdminPage.jsx
import React from "react";

export default function AdminPage() {
  const stats = [
    { label: "Active homestays", value: "124", sub: "awaiting 8 approvals" },
    { label: "Bookings today", value: "37", sub: "↑ 12% vs yesterday" },
    { label: "Pending reports", value: "5", sub: "3 safety, 2 payment" },
    { label: "Registered users", value: "4,208", sub: "hosts + tourists" },
  ];

  const actions = [
    "Review new homestay approvals",
    "Monitor suspicious activity & reports",
    "Update platform-wide discount banners",
    "Export monthly revenue & booking summary",
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
          style={{ color: "#f9fafb", fontWeight: 800, letterSpacing: "1px" }}
        >
          Admin Control Center
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: "620px" }}>
          As an admin, you keep Homestay Explorer safe, reliable and smooth for
          everyone. Monitor bookings, manage hosts & listings, and handle
          security or support issues from one place.
        </p>

        {/* Stats */}
        <div className="row g-3 mt-4">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div
                style={{
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.96)",
                  border: "1px solid rgba(56,189,248,0.5)",
                  padding: "14px 14px 10px",
                  color: "#e5e7eb",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#22d3ee",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.82rem" }}>{s.label}</div>
                <div
                  style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: 4 }}
                >
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions + info */}
        <div className="row g-4 mt-4">
          <div className="col-md-7">
            <div
              style={{
                borderRadius: "18px",
                background: "rgba(15,23,42,0.96)",
                border: "1px solid rgba(34,197,94,0.5)",
                padding: "18px 18px 14px",
                color: "#e5e7eb",
              }}
            >
              <h4 className="mb-2" style={{ fontWeight: 600 }}>
                Daily admin actions
              </h4>
              <ul
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: "0.9rem",
                  marginBottom: 0,
                }}
              >
                {actions.map((a, i) => (
                  <li key={i} className="mb-1">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div
              style={{
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,rgba(37,99,235,0.2),rgba(8,47,73,0.95))",
                border: "1px solid rgba(59,130,246,0.8)",
                padding: "18px 18px 14px",
                color: "#e5e7eb",
              }}
            >
              <h4 className="mb-2" style={{ fontWeight: 600 }}>
                Admin responsibilities
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                • Maintain a safe environment by reviewing reports and
                suspicious activity. <br />
                • Ensure only quality, verified homestays go live. <br />
                • Coordinate with support/team to solve disputes between hosts
                and tourists. <br />
                • Configure global discount campaigns during festivals and
                exam/vacation seasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
