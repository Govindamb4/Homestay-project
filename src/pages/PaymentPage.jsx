// src/pages/PaymentPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import upiQr from "../assets/upi-qr.png"; // your QR IMAGE

function generateFakeTxnId() {
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return "HSTY-" + Date.now().toString().slice(-6) + "-" + rand;
}

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const listing = location.state?.listing || null;

  const [step, setStep] = useState("form"); // form, processing, success
  const [method, setMethod] = useState("card"); // card | upi
  const [txnId] = useState(generateFakeTxnId);

  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveCard: false,
  });

  if (!listing && step === "form") {
    return (
      <section
        className="py-5"
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at top, #020617, #082f49)",
        }}
      >
        <div className="container text-center text-light">
          <h3 className="mb-3">No booking details found</h3>
          <p className="text-muted">
            Please choose a homestay again and click “Book Now”.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  const price = listing.price;
  const tax = Math.round(price * 0.18);
  const totalPayable = price + tax + 49;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      form.cardNumber.replace(/\s/g, "").length < 12 ||
      form.cvv.length < 3 ||
      !form.expiry
    ) {
      alert("Please fill all card details correctly.");
      return;
    }

    setStep("processing");
    setTimeout(() => setStep("success"), 1200);
  };

  const copyUpiId = () => {
    const UPI_ID = "homestay@upi";
    navigator.clipboard.writeText(UPI_ID);
    alert("Copied: " + UPI_ID);
  };

  const goHome = () => navigate("/");
  const goBackToListing = () => navigate(`/listing/${listing.id}`);

  return (
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #020617, #082f49)",
        paddingTop: "90px",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: 800,
            letterSpacing: "2px",
            color: "white",
          }}
        >
          Secure Payment Gateway
        </h2>

        <div
          className="mx-auto p-4 p-md-5"
          style={{
            maxWidth: "1150px",
            background: "rgba(15,23,42,0.8)",
            borderRadius: "22px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(148,163,184,0.3)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* ================= FORM ================= */}
          {step === "form" && (
            <div className="row g-4">
              {/* LEFT: PAYMENT METHOD */}
              <div className="col-md-7">
                <div
                  className="p-4"
                  style={{
                    borderRadius: "18px",
                    background: "rgba(30,41,59,0.55)",
                    border: "1px solid rgba(148,163,184,0.4)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* TABS */}
                  <div
                    className="d-flex mb-4 p-1 rounded-pill"
                    style={{
                      background: "rgba(15,23,42,0.85)",
                      border: "1px solid rgba(148,163,184,0.3)",
                    }}
                  >
                    <button
                      onClick={() => setMethod("card")}
                      className="flex-fill btn btn-sm"
                      style={{
                        borderRadius: "99px",
                        background:
                          method === "card"
                            ? "linear-gradient(135deg,#38bdf8,#22c55e)"
                            : "transparent",
                        color: method === "card" ? "#020617" : "#e5e7eb",
                        fontWeight: 600,
                      }}
                    >
                      💳 Card
                    </button>

                    <button
                      onClick={() => setMethod("upi")}
                      className="flex-fill btn btn-sm"
                      style={{
                        borderRadius: "99px",
                        background:
                          method === "upi"
                            ? "linear-gradient(135deg,#22c55e,#a3e635)"
                            : "transparent",
                        color: method === "upi" ? "#020617" : "#e5e7eb",
                        fontWeight: 600,
                      }}
                    >
                      📱 UPI
                    </button>
                  </div>

                  {/* CARD PAYMENT */}
                  {method === "card" && (
                    <form onSubmit={handleCardSubmit}>
                      <div className="mb-3">
                        <label className="form-label text-light">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="As printed on card"
                          value={form.name}
                          onChange={handleChange}
                          style={{
                            backgroundColor: "#020617",
                            color: "#e2e8f0",
                            borderColor: "#1e293b",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label text-light">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          className="form-control"
                          placeholder="XXXX XXXX XXXX XXXX"
                          value={form.cardNumber}
                          maxLength={19}
                          onChange={handleChange}
                          style={{
                            backgroundColor: "#020617",
                            color: "#e2e8f0",
                            borderColor: "#1e293b",
                          }}
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-6">
                          <label className="form-label text-light">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            className="form-control"
                            placeholder="08/28"
                            maxLength={5}
                            value={form.expiry}
                            onChange={handleChange}
                            style={{
                              backgroundColor: "#020617",
                              color: "#e2e8f0",
                              borderColor: "#1e293b",
                            }}
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label text-light">CVV</label>
                          <input
                            type="password"
                            name="cvv"
                            className="form-control"
                            placeholder="●●●"
                            maxLength={4}
                            value={form.cvv}
                            onChange={handleChange}
                            style={{
                              backgroundColor: "#020617",
                              color: "#e2e8f0",
                              borderColor: "#1e293b",
                            }}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn w-100"
                        style={{
                          background:
                            "linear-gradient(135deg,#22c55e,#4ade80,#22c55e)",
                          border: "none",
                          color: "#022c22",
                          fontWeight: 700,
                        }}
                      >
                        Pay Now ₹{price}
                      </button>
                    </form>
                  )}

                  {/* UPI PAYMENT */}
                  {method === "upi" && (
                    <div>
                      <p className="text-light small mb-2">
                        Scan using Google Pay, PhonePe, Paytm or any UPI app
                      </p>

                      <div className="text-center mb-3">
                        <img
                          src={upiQr}
                          alt="QR"
                          style={{
                            width: "260px",
                            borderRadius: "16px",
                            border: "1px solid rgba(148,163,184,0.6)",
                            backgroundColor: "#0f172a",
                            padding: "10px",
                          }}
                        />
                        <p className="text-light mt-2">
                          Pay <strong>₹{totalPayable}</strong> using UPI
                        </p>

                        <button
                          className="btn btn-outline-info btn-sm"
                          onClick={copyUpiId}
                          style={{ borderRadius: "999px" }}
                        >
                          Copy UPI ID
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT: SUMMARY */}
              <div className="col-md-5">
                <div
                  className="p-4"
                  style={{
                    borderRadius: "18px",
                    background: "rgba(2,6,23,0.6)",
                    border: "1px solid rgba(148,163,184,0.3)",
                    color: "#e2e8f0",
                  }}
                >
                  <h4 className="mb-3">Booking Summary</h4>

                  <h5 className="mb-1">{listing.title}</h5>

                  {/* 🔥 COLOR FIX #1 → CYAN */}
                  <p
                    className="mb-2"
                    style={{
                      color: "#67e8f9",
                      fontWeight: 500,
                    }}
                  >
                    {listing.location}
                  </p>

                  <p className="text-muted small mb-3">
                    {listing.description}
                  </p>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Price per night</span>
                    <span>₹{price}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Platform fee</span>
                    <span>₹49</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>GST</span>
                    <span>₹{tax}</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                    <span>Total payable</span>
                    <span className="text-success">₹{totalPayable}</span>
                  </div>

                  {/* 🔥 COLOR FIX #2 → SOFT TURQUOISE */}
                  <p className="small" style={{ color: "#a5f3fc" }}>
                    You'll receive booking details and host contact on your
                    registered email after successful payment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PROCESSING */}
          {step === "processing" && (
            <div className="text-center py-5 text-light">
              <div className="spinner-border text-success mb-3" />
              <h4>Processing payment…</h4>
            </div>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <div className="text-center py-5 text-light">
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle,#bbf7d0,#22c55e,#15803d)",
                  margin: "auto",
                  fontSize: "3rem",
                  color: "#022c22",
                }}
              >
                ✓
              </div>

              <h3 className="mt-4">Payment Successful</h3>

              <p className="text-muted">
                Transaction ID: <strong>{txnId}</strong>
              </p>

              <button className="btn btn-primary me-2" onClick={goHome}>
                Home
              </button>
              <button className="btn btn-outline-light" onClick={goBackToListing}>
                View Listing
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
