// src/pages/LoginPage.jsx
import React, { useState } from "react";
import "./LoginPage.css"; // small companion CSS (paste below)

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.trim()) return "Please enter your email.";
    // very simple email check
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
    if (!password) return "Please enter your password.";
    if (password.length < 4) return "Password must be at least 4 characters.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    // demo delay — replace with real API call
    await new Promise((r) => setTimeout(r, 800));

    // demo auth logic
    if (email.toLowerCase().endsWith("@example.com") || password === "password") {
      setLoading(false);
      setError("");
      if (typeof onLogin === "function") onLogin({ email, remember });
      else alert(`Logged in (demo): ${email}`);
    } else {
      setLoading(false);
      setError("Invalid credentials. For demo use any email ending with @example.com or password 'password'.");
    }
  };

  return (
    <div className="login-bg d-flex align-items-center justify-content-center">
      <div className="login-card rounded-3 shadow-lg p-4">
        <div className="text-center mb-3">
          <h3 className="mb-1">Welcome back</h3>
          <p className="text-muted small mb-0">Sign in to manage your homestays and bookings</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3 form-floating-custom">
            <input
              id="loginEmail"
              type="email"
              className={`form-control-custom ${email ? "has-value" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              aria-label="Email"
            />
            <label htmlFor="loginEmail">Email</label>
            <span className="input-check">{email ? "✓" : ""}</span>
          </div>

          <div className="mb-2 form-floating-custom">
            <input
              id="loginPassword"
              type={showPassword ? "text" : "password"}
              className={`form-control-custom ${password ? "has-value" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
            />
            <label htmlFor="loginPassword">Password</label>

            <button
              type="button"
              className="btn btn-sm btn-link show-hide"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <div
                className={`remember-pill me-2 ${remember ? "on" : ""}`}
                onClick={() => setRemember((r) => !r)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setRemember((r) => !r)}
                aria-pressed={remember}
                aria-label="Remember me"
              >
                <div className="knob" />
              </div>
              <small className="text-muted">Remember me</small>
            </div>

            <a href="#" className="small text-primary">Forgot?</a>
          </div>

          {error && <div className="alert alert-danger py-2 mb-3">{error}</div>}

          <div className="d-grid mb-3">
            <button
              className="btn btn-primary btn-login"
              type="submit"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" />
              ) : null}
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1 me-2" />
            <small className="text-muted">or continue with</small>
            <hr className="flex-grow-1 ms-2" />
          </div>

          <div className="d-grid gap-2">
            <button type="button" className="btn btn-outline-secondary btn-social" onClick={() => alert("Google demo")}>
              <i className="bi bi-google me-2" /> Continue with Google
            </button>
            <button type="button" className="btn btn-outline-secondary btn-social" onClick={() => alert("Facebook demo")}>
              <i className="bi bi-facebook me-2" /> Continue with Facebook
            </button>
          </div>

          <div className="text-center mt-3 small text-muted">
            Don't have an account? <a href="#" className="text-primary">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
