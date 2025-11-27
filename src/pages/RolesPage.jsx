import React from "react";
import { useNavigate } from "react-router-dom";
import { roles } from "../data/sampleData";

export default function RolesPage() {
  const navigate = useNavigate();

  const handleRoleClick = (title) => {
    if (title === "Admin") {
      navigate("/admin");
    } else if (title === "Guide") {
      navigate("/local-guides");
    } else if (title === "Host") {
      navigate("/hosts"); // ✅ OPEN HOSTS PAGE
    }
  };

  const isClickable = (title) =>
    title === "Admin" || title === "Guide" || title === "Host";

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Platform Roles</h2>
        <div className="row">
          {roles.map((r) => (
            <div className="col-md-3 mb-3" key={r.id}>
              <div
                className={
                  "card text-center bg-dark text-light h-100 " +
                  (isClickable(r.title) ? "border-info" : "")
                }
                style={isClickable(r.title) ? { cursor: "pointer" } : {}}
                onClick={() => isClickable(r.title) && handleRoleClick(r.title)}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5>{r.title}</h5>
                    <p>{r.description}</p>
                  </div>

                  {r.title === "Admin" && (
                    <span className="badge bg-info text-dark mt-2">
                      Open Admin Page
                    </span>
                  )}

                  {r.title === "Guide" && (
                    <span className="badge bg-info text-dark mt-2">
                      View Local Guides
                    </span>
                  )}

                  {r.title === "Host" && (
                    <span className="badge bg-info text-dark mt-2">
                      View All Hosts
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
