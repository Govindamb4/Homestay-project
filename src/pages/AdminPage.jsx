import React from "react";

const developers = [
  {
    id: 1,
    name: "First devepor",
    role: "Lead Developer",
    email: "xtrd.@vercel",
    about:
      "B.Tech CSE student and primary developer of the Homestay Explorer platform.",
    image:
      ""
  },
  {
    id: 2,
    name: "Second Developer",
    role: "Frontend Developer",
    email: "developer2@example.com",
    about:
      "Helps in building interactive UI components, styling, and performance improvements.",
    image:
      ""
  }
];

export default function AdminPage() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-3 text-info">Admin & Developers</h2>
        <p className="text-center mb-4">
          Meet the people who manage and build the Homestay Explorer platform.
        </p>

        <div className="row">
          {developers.map((dev) => (
            <div key={dev.id} className="col-md-6 mb-4">
              <div className="card h-100 bg-secondary text-light shadow-sm">
                <div className="card-body d-flex flex-column flex-md-row align-items-center">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="rounded-circle mb-3 mb-md-0"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "cover",
                      marginRight: "20px"
                    }}
                  />
                  <div>
                    <h5 className="card-title mb-1 text-light">{dev.name}</h5>
                    <p className="mb-1">
                      <strong>{dev.role}</strong>
                    </p>
                    <p className="mb-1 small">{dev.about}</p>
                    <p className="mb-0 small">
                      <strong>Email:</strong> {dev.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info mt-3 small">
          <strong>Note:</strong> currently project is in developing phase
        </div>
      </div>
    </section>
  );
}
