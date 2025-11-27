import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900/?travel,homestay,city')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        position: 'relative',
        color: '#fff',
      }}
    >
      <div style={{ background: 'rgba(0,0,0,0.6)', padding: '40px 0' }}>
        <div className="container text-center">
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', color: '#00ffe5' }}>
            Discover Authentic Homestays & Local Wonders
          </h1>
          <p className="lead">
            Personalized recommendations, bookings, and insights for an unforgettable travel experience.
          </p>

          {/* ✅ Added button that links to the Search page */}
          <Link to="/search" className="btn btn-info mt-3 px-4 py-2">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
}
