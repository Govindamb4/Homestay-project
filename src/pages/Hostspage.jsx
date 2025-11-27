// src/pages/HostsPage.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { listings } from "../data/sampleData";

/**
 * HostsPage
 * - Extracts host names from listings via the `host` field.
 * - Removes duplicates and groups listings by host name.
 * - Displays each host and a grid of their homestays.
 */

export default function HostsPage() {
  // Group listings by host name (normalize by trimming)
  const hostsGrouped = useMemo(() => {
    const map = new Map();

    (Array.isArray(listings) ? listings : []).forEach((lst) => {
      const rawHost = lst.host ?? lst.hostName ?? "";
      const hostName = String(rawHost).trim();
      if (!hostName) return; // skip listings without host name

      if (!map.has(hostName)) map.set(hostName, []);
      map.get(hostName).push(lst);
    });

    // convert to array of { name, listings } sorted by number of listings desc
    const arr = Array.from(map.entries()).map(([name, items]) => ({ name, listings: items }));
    arr.sort((a, b) => b.listings.length - a.listings.length);
    return arr;
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-2">Hosts (from listings)</h2>
        <p className="text-center text-muted mb-4">
          Showing <strong>{hostsGrouped.length}</strong> hosts derived from listings.
        </p>

        {hostsGrouped.length === 0 ? (
          <div className="alert alert-warning text-center">
            No hosts found in listings. Make sure each listing has a <code>host</code> field.
          </div>
        ) : (
          <div className="row">
            {hostsGrouped.map((host) => (
              <div className="col-12 mb-4" key={host.name}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-1">{host.name}</h5>
                        <div className="text-muted small">Homestays: <strong>{host.listings.length}</strong></div>
                      </div>

                      <div className="text-end">
                        {/* optional: if you have host profile route by name or id, change this link */}
                        <Link to={`/hosts`} className="btn btn-outline-primary btn-sm">
                          View All
                        </Link>
                      </div>
                    </div>

                    <div className="row">
                      {host.listings.map((lst) => (
                        <div className="col-md-4 mb-3" key={lst.id ?? `${host.name}-${Math.random()}`}>
                          <div className="card h-100">
                            {lst.image && (
                              <img
                                src={lst.image}
                                alt={lst.title ?? "homestay"}
                                className="card-img-top"
                                style={{ objectFit: "cover", height: 150 }}
                              />
                            )}
                            <div className="card-body">
                              <h6 className="card-title">{lst.title ?? "Untitled"}</h6>
                              {lst.location && <p className="card-text small mb-1"><strong>Location:</strong> {lst.location}</p>}
                              {lst.price !== undefined && <p className="card-text small mb-1"><strong>Price:</strong> ₹{lst.price}</p>}
                              {lst.rating !== undefined && <p className="card-text small mb-1"><strong>Rating:</strong> {lst.rating} ⭐</p>}
                              {lst.id && (
                                <Link to={`/listing/${lst.id}`} className="btn btn-sm btn-primary">
                                  View Homestay
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
