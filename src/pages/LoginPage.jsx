// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
    setInfo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    if (mode === "signup") {
      if (!form.name.trim()) {
        setError("Please enter your full name.");
        return;
      }
      if (form.password.length < 6) {
        setError("Password should be at least 6 characters long.");
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setInfo(
        "Account created successfully. We’ve sent you a welcome email with nearby homestays, discounts and special offers. (Demo)"
      );

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      // login
      setInfo(
        "Logged in successfully. We’ve sent you an email with nearest homestays, discounts and special offers based on your location. (Demo)"
      );

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  const handleGoogle = () => {
    setError("");
    setInfo(
      "Signed in with Google successfully. A personalised offers email has been sent to your Google account. (Demo)"
    );

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const switchMode = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    setInfo("");
  };

  return (
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #020617, #020617 40%, #020c1b 100%)",
        paddingTop: "90px",
        paddingBottom: "60px",
      }}
    >
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="row w-100" style={{ maxWidth: "1050px" }}>
          {/* LEFT SIDE - TEXT / MARKETING */}
          <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center pe-md-5">
            <h2
              className="mb-3"
              style={{ color: "#f9fafb", fontWeight: 700, fontSize: "2.1rem" }}
            >
              Welcome back to{" "}
              <span style={{ color: "#22d3ee" }}>Homestay Explorer</span>
            </h2>
            <p
              className="mb-3"
              style={{ color: "#e5e7eb", fontSize: "0.98rem", lineHeight: 1.6 }}
            >
              Login or sign up to discover curated stays near you — from cozy
              mountain homes to modern city apartments with exclusive student
              discounts.
            </p>
            <ul style={{ color: "#cbd5f5", fontSize: "0.92rem", paddingLeft: "1.1rem" }}>
              <li className="mb-1">
                Personalized recommendations near your location
              </li>
              <li className="mb-1">
                Exclusive discounts & special seasonal offers
              </li>
              <li className="mb-1">Early access to new homestays</li>
            </ul>
          </div>

          {/* RIGHT SIDE - AUTH CARD */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="w-100"
              style={{
                maxWidth: "420px",
                background: "rgba(15,23,42,0.96)",
                borderRadius: "24px",
                boxShadow: "0 18px 45px rgba(0,0,0,0.7)",
                border: "1px solid rgba(148,163,184,0.4)",
              }}
            >
              <div className="p-4 p-md-5">
                {/* LOGIN / SIGNUP SWITCH */}
                <div
                  className="d-flex mb-4 p-1 rounded-pill"
                  style={{
                    background: "rgba(15,23,42,1)",
                    border: "1px solid rgba(148,163,184,0.5)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="flex-fill btn btn-sm"
                    style={{
                      borderRadius: "999px",
                      border: "none",
                      fontWeight: 600,
                      background:
                        mode === "login"
                          ? "linear-gradient(135deg,#22d3ee,#22c55e)"
                          : "transparent",
                      color: mode === "login" ? "#020617" : "#e5e7eb",
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => switchMode("signup")}
                    className="flex-fill btn btn-sm"
                    style={{
                      borderRadius: "999px",
                      border: "none",
                      fontWeight: 600,
                      background:
                        mode === "signup"
                          ? "linear-gradient(135deg,#38bdf8,#a855f7)"
                          : "transparent",
                      color: mode === "signup" ? "#020617" : "#e5e7eb",
                    }}
                  >
                    Sign up
                  </button>
                </div>

                <h3
                  className="mb-1 text-center"
                  style={{ color: "#f9fafb", fontWeight: 600 }}
                >
                  {mode === "login" ? "Login" : "Create account"}
                </h3>
                <p
                  className="text-center mb-4"
                  style={{ color: "#9ca3af", fontSize: "0.85rem" }}
                >
                  {mode === "login"
                    ? "Use your email to sign in and get personalised homestay suggestions."
                    : "Sign up with your email to start exploring the best homestays."}
                </p>

                {/* ALERTS */}
                {error && (
                  <div className="alert alert-danger py-2 small">{error}</div>
                )}
                {info && (
                  <div className="alert alert-success py-2 small">{info}</div>
                )}

                {/* GOOGLE BUTTON */}
                <button
                  type="button"
                  onClick={handleGoogle}
                  className="btn w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    borderRadius: "999px",
                    backgroundColor: "#020617",
                    border: "1px solid #4b5563",
                    color: "#e5e7eb",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    G
                  </span>
                  <span>Continue with Google</span>
                </button>

                <div
                  className="text-center mb-3"
                  style={{ color: "#6b7280", fontSize: "0.78rem" }}
                >
                  ─── or use your email ───
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  {mode === "signup" && (
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={{
                          backgroundColor: "#020617",
                          borderColor: "#1f2937",
                          color: "#e5e7eb",
                        }}
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#020617",
                        borderColor: "#1f2937",
                        color: "#e5e7eb",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label d-flex justify-content-between"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      <span>Password</span>
                      {mode === "login" && (
                        <a
                          href="#!"
                          style={{
                            fontSize: "0.8rem",
                            textDecoration: "none",
                            color: "#38bdf8",
                          }}
                        >
                          Forgot password?
                        </a>
                      )}
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#020617",
                        borderColor: "#1f2937",
                        color: "#e5e7eb",
                      }}
                    />
                  </div>

                  {mode === "signup" && (
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Re-enter your password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#020617",
                          borderColor: "#1f2937",
                          color: "#e5e7eb",
                        }}
                      />
                    </div>
                  )}

                  {mode === "login" && (
                    <div className="d-flex align-items-center mb-3">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        className="form-check-input me-2"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="form-check-label"
                        style={{ color: "#cbd5f5", fontSize: "0.82rem" }}
                      >
                        Remember me
                      </label>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn w-100 mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg,#22c55e,#22d3ee,#22c55e)",
                      border: "none",
                      color: "#020617",
                      fontWeight: 700,
                      borderRadius: "999px",
                    }}
                  >
                    {mode === "login" ? "Login" : "Sign up"}
                  </button>
                </form>

                <p
                  className="text-center mb-0"
                  style={{ color: "#9ca3af", fontSize: "0.78rem" }}
                >
                  By {mode === "login" ? "logging in" : "signing up"}, you agree
                  to receive emails about nearest homestays, discounts and
                  exclusive offers. (Demo only — no real emails are sent.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
