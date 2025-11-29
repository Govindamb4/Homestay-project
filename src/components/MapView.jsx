// src/components/MapView.jsx
import React, { useState, useMemo, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Polyline,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// --- Fix Leaflet marker icons for Vite/React ---
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// ---- Sample homestays across India ----
const HOMESTAYS = [
  {
    id: 1,
    name: "Vijayawada Riverfront Retreat",
    city: "Vijayawada, Andhra Pradesh",
    lat: 16.5062,
    lng: 80.648,
    price: 1899,
    rating: 4.6,
    tag: "Near college hubs",
    region: "South",
  },
  {
    id: 2,
    name: "KL University Stay",
    city: "Vaddeswaram, Andhra Pradesh",
    lat: 16.4419,
    lng: 80.6225,
    price: 1499,
    rating: 4.4,
    tag: "Student friendly",
    region: "South",
  },
  {
    id: 3,
    name: "Hyderabad Tech City Homestay",
    city: "Hyderabad, Telangana",
    lat: 17.385,
    lng: 78.4867,
    price: 2099,
    rating: 4.7,
    tag: "IT hub access",
    region: "South",
  },
  {
    id: 4,
    name: "Bengaluru Skyline Loft",
    city: "Bengaluru, Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    price: 2499,
    rating: 4.8,
    tag: "Work & chill",
    region: "South",
  },
  {
    id: 5,
    name: "Mumbai Sea Breeze Homestay",
    city: "Mumbai, Maharashtra",
    lat: 19.076,
    lng: 72.8777,
    price: 2799,
    rating: 4.5,
    tag: "Sea view",
    region: "West",
  },
  {
    id: 6,
    name: "Jaipur Royal Courtyard",
    city: "Jaipur, Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    price: 1999,
    rating: 4.6,
    tag: "Heritage stay",
    region: "North",
  },
  {
    id: 7,
    name: "Delhi City Lights Apartment",
    city: "New Delhi, Delhi",
    lat: 28.6139,
    lng: 77.209,
    price: 2599,
    rating: 4.4,
    tag: "Central location",
    region: "North",
  },
  {
    id: 8,
    name: "Manali Pine View Cabin",
    city: "Manali, Himachal Pradesh",
    lat: 32.2432,
    lng: 77.1892,
    price: 2299,
    rating: 4.9,
    tag: "Snow & mountains",
    region: "North",
  },
  {
    id: 9,
    name: "Darjeeling Tea Garden Homestay",
    city: "Darjeeling, West Bengal",
    lat: 27.041,
    lng: 88.2663,
    price: 2199,
    rating: 4.7,
    tag: "Scenic views",
    region: "East",
  },
  {
    id: 10,
    name: "Goa Beachside Studio",
    city: "Calangute, Goa",
    lat: 15.5439,
    lng: 73.7553,
    price: 2899,
    rating: 4.8,
    tag: "Beach walk",
    region: "West",
  },
  {
    id: 11,
    name: "Munnar Misty Hills Homestay",
    city: "Munnar, Kerala",
    lat: 10.0889,
    lng: 77.0595,
    price: 2399,
    rating: 4.9,
    tag: "Tea estates",
    region: "South",
  },
  {
    id: 12,
    name: "Kolkata Heritage Townhouse",
    city: "Kolkata, West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    price: 1999,
    rating: 4.3,
    tag: "Culture & food",
    region: "East",
  },
];

// Haversine distance in km
function distanceInKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Approx travel time (hrs) assuming 45 km/h
function estimateTravelTimeHours(distanceKm) {
  if (!distanceKm || distanceKm <= 0) return 0;
  return distanceKm / 45;
}

// Handles map clicks
function ClickHandler({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

// Fly the map to a point when it changes
function MapController({ focusPoint }) {
  const map = useMap();

  useEffect(() => {
    if (focusPoint) {
      map.flyTo([focusPoint.lat, focusPoint.lng], 6, {
        duration: 1.1,
      });
    }
  }, [focusPoint, map]);

  return null;
}

export default function MapView() {
  const [clickedPoint, setClickedPoint] = useState(null);
  const [selectedHomestay, setSelectedHomestay] = useState(null);
  const [focusPoint, setFocusPoint] = useState({
    lat: 20.5937,
    lng: 78.9629, // center of India
  });
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredHomestays = useMemo(() => {
    if (regionFilter === "All") return HOMESTAYS;
    return HOMESTAYS.filter((h) => h.region === regionFilter);
  }, [regionFilter]);

  const nearestHomestays = useMemo(() => {
    if (!clickedPoint) return [];
    const withDistance = filteredHomestays.map((h) => {
      const distance = distanceInKm(
        clickedPoint.lat,
        clickedPoint.lng,
        h.lat,
        h.lng
      );
      return {
        ...h,
        distance,
        travelHours: estimateTravelTimeHours(distance),
      };
    });
    return withDistance.sort((a, b) => a.distance - b.distance).slice(0, 4);
  }, [clickedPoint, filteredHomestays]);

  const closest = nearestHomestays[0] || null;
  const defaultCenter = [20.5937, 78.9629];

  const handleMapClick = (latlng) => {
    setClickedPoint(latlng);
    setSelectedHomestay(null);
    setFocusPoint({ lat: latlng.lat, lng: latlng.lng });
  };

  const handleSelectHomestay = (h) => {
    setSelectedHomestay(h);
    setFocusPoint({ lat: h.lat, lng: h.lng });
  };

  return (
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617, #020617 30%, #020c1b 100%)",
        paddingTop: "90px",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-2"
          style={{ color: "#f9fafb", fontWeight: 800 }}
        >
          Interactive Homestay Map (OSM)
        </h2>
        <p
          className="text-center mb-4"
          style={{ color: "#9ca3af", fontSize: "0.95rem" }}
        >
          Click anywhere on the map to see the{" "}
          <span style={{ color: "#22d3ee" }}>nearest homestays</span>,{" "}
          <span style={{ color: "#22c55e" }}>shortest distance</span> and{" "}
          <span style={{ color: "#e5e7eb" }}>approx travel time</span>.
        </p>

        <div className="row g-4">
          {/* MAP */}
          <div className="col-lg-8">
            <div
              style={{
                borderRadius: "24px",
                padding: "10px",
                background:
                  "radial-gradient(circle at top left, #22d3ee40, #22c55e15, #020617)",
                boxShadow:
                  "0 0 30px rgba(16,185,129,0.45), 0 25px 60px rgba(15,23,42,0.9)",
              }}
            >
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(148,163,184,0.6)",
                }}
              >
                <MapContainer
                  center={defaultCenter}
                  zoom={5}
                  style={{ height: "480px", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <ClickHandler onClick={handleMapClick} />
                  <MapController focusPoint={focusPoint} />

                  {/* All homestay markers */}
                  {filteredHomestays.map((h) => (
                    <Marker key={h.id} position={[h.lat, h.lng]}>
                      <Popup>
                        <strong>{h.name}</strong>
                        <br />
                        {h.city}
                        <br />
                        ₹{h.price} / night • ⭐ {h.rating}
                      </Popup>
                    </Marker>
                  ))}

                  {/* Clicked point */}
                  {clickedPoint && (
                    <CircleMarker
                      center={[clickedPoint.lat, clickedPoint.lng]}
                      radius={9}
                      pathOptions={{
                        color: "#22d3ee",
                        weight: 3,
                        fillColor: "#22c55e",
                        fillOpacity: 0.4,
                      }}
                    />
                  )}

                  {/* Highlight selected homestay */}
                  {selectedHomestay && (
                    <CircleMarker
                      center={[selectedHomestay.lat, selectedHomestay.lng]}
                      radius={13}
                      pathOptions={{
                        color: "#22c55e",
                        weight: 2,
                        fillColor: "#22c55e",
                        fillOpacity: 0.2,
                      }}
                    />
                  )}

                  {/* Line from clicked point to closest */}
                  {clickedPoint && closest && (
                    <Polyline
                      positions={[
                        [clickedPoint.lat, clickedPoint.lng],
                        [closest.lat, closest.lng],
                      ]}
                      pathOptions={{
                        color: "#22c55e",
                        dashArray: "6 6",
                        weight: 3,
                      }}
                    />
                  )}
                </MapContainer>
              </div>
            </div>
          </div>

          {/* SIDE PANEL */}
          <div className="col-lg-4">
            <div
              className="h-100"
              style={{
                borderRadius: "18px",
                background: "rgba(15,23,42,0.96)",
                border: "1px solid rgba(148,163,184,0.5)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.75)",
                color: "#e5e7eb",
              }}
            >
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2"
                style={{
                  borderTopLeftRadius: "18px",
                  borderTopRightRadius: "18px",
                  background:
                    "linear-gradient(135deg,#2563eb,#22c55e,#22d3ee)",
                  color: "#f9fafb",
                  fontWeight: 600,
                }}
              >
                <span>Nearest Homestays</span>
                <span
                  className="badge bg-dark"
                  style={{
                    fontSize: "0.7rem",
                    borderRadius: "999px",
                  }}
                >
                  {filteredHomestays.length} locations
                </span>
              </div>

              {/* Region filter */}
              <div className="px-3 pt-3">
                <label
                  className="form-label mb-1"
                  style={{ fontSize: "0.8rem", color: "#9ca3af" }}
                >
                  Filter by region
                </label>
                <select
                  className="form-select form-select-sm"
                  value={regionFilter}
                  onChange={(e) => {
                    setRegionFilter(e.target.value);
                    setClickedPoint(null);
                    setSelectedHomestay(null);
                  }}
                  style={{
                    backgroundColor: "#020617",
                    color: "#e5e7eb",
                    borderColor: "#1f2937",
                    fontSize: "0.85rem",
                  }}
                >
                  <option value="All">All regions</option>
                  <option value="North">North India</option>
                  <option value="South">South India</option>
                  <option value="East">East India</option>
                  <option value="West">West India</option>
                </select>
              </div>

              <div className="px-3 pb-3" style={{ fontSize: "0.9rem" }}>
                {!clickedPoint && (
                  <div className="mt-3">
                    <p style={{ color: "#cbd5f5" }}>
                      👉 Click anywhere on the map to calculate nearby
                      homestays and distances. Until then, here are some{" "}
                      <span style={{ color: "#22d3ee" }}>featured stays</span>:
                    </p>
                    <div className="mt-2" style={{ maxHeight: "320px", overflowY: "auto" }}>
                      {filteredHomestays.slice(0, 5).map((h) => (
                        <button
                          key={h.id}
                          className="w-100 text-start mb-2 btn btn-sm"
                          onClick={() => handleSelectHomestay(h)}
                          style={{
                            backgroundColor:
                              selectedHomestay?.id === h.id
                                ? "rgba(34,197,94,0.15)"
                                : "rgba(15,23,42,0.9)",
                            borderColor:
                              selectedHomestay?.id === h.id
                                ? "#22c55e"
                                : "#1f2937",
                            color: "#e5e7eb",
                            borderRadius: "12px",
                          }}
                        >
                          <div className="fw-semibold">{h.name}</div>
                          <div
                            className="small"
                            style={{ color: "#67e8f9" }}
                          >
                            {h.city}
                          </div>
                          <div className="small text-muted">
                            ₹{h.price} / night • ⭐ {h.rating} • {h.tag}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {clickedPoint && nearestHomestays.length > 0 && (
                  <div className="mt-3">
                    <p className="mb-2" style={{ color: "#cbd5f5" }}>
                      📍 Selected location fixed. Showing{" "}
                      <strong>{nearestHomestays.length}</strong> nearest
                      homestays:
                    </p>
                    <div style={{ maxHeight: "320px", overflowY: "auto" }}>
                      {nearestHomestays.map((h, idx) => (
                        <button
                          key={h.id}
                          className="w-100 text-start mb-2 btn btn-sm"
                          onClick={() => handleSelectHomestay(h)}
                          style={{
                            backgroundColor:
                              selectedHomestay?.id === h.id || idx === 0
                                ? "rgba(34,197,94,0.14)"
                                : "rgba(15,23,42,0.9)",
                            borderColor:
                              selectedHomestay?.id === h.id || idx === 0
                                ? "#22c55e"
                                : "#1f2937",
                            color: "#e5e7eb",
                            borderRadius: "12px",
                          }}
                        >
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="fw-semibold">{h.name}</div>
                              <div
                                className="small"
                                style={{ color: "#67e8f9" }}
                              >
                                {h.city}
                              </div>
                              <div className="small text-muted">
                                ₹{h.price} / night • ⭐ {h.rating} • {h.tag}
                              </div>
                            </div>
                            <div className="text-end">
                              <span
                                className="badge bg-dark mb-1"
                                style={{
                                  fontSize: "0.7rem",
                                  borderRadius: "999px",
                                }}
                              >
                                {h.distance.toFixed(1)} km
                              </span>
                              <div
                                className="small"
                                style={{ color: "#a5f3fc" }}
                              >
                                ~
                                {Math.max(
                                  0.3,
                                  estimateTravelTimeHours(h.distance)
                                ).toFixed(1)}{" "}
                                hrs
                              </div>
                              {idx === 0 && (
                                <span className="badge bg-success mt-1">
                                  Closest
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {closest && (
                      <p
                        className="small mt-2 mb-0"
                        style={{ color: "#9ca3af" }}
                      >
                        Shortest distance is to{" "}
                        <strong style={{ color: "#22c55e" }}>
                          {closest.name}
                        </strong>{" "}
                        ({closest.distance.toFixed(2)} km).
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
