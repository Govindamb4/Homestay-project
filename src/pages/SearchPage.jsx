// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { listings } from '../data/sampleData'; // ✅ Import shared data

export default function SearchPage(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(listings); // ✅ Start with all listings

  // Handle the search form submission
  function handleSearch(e){
    e.preventDefault();
    const q = query.trim().toLowerCase();

    // Filter listings based on title, description, or location
    const filtered = listings.filter(l =>
      (l.title && l.title.toLowerCase().includes(q)) ||
      (l.description && l.description.toLowerCase().includes(q)) ||
      (l.location && l.location.toLowerCase().includes(q))
    );

    // If no query, show all
    setResults(q ? filtered : listings);
  }

  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-light text-center mb-4">Search Homestays</h2>

        <form onSubmit={handleSearch} className="row g-3 justify-content-center mb-4">
          <div className="col-md-6">
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              className="form-control"
              placeholder="Search by title, location, or description..."
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" type="submit">Search</button>
          </div>
        </form>

        <div className="row">
          {results.map(r => (
            <div className="col-md-4 mb-3" key={r.id}>
              <div className="card h-100">
                <img
                  src={r.image || r.img || 'https://source.unsplash.com/40x250/?homestay'}
                  width={300}
                  height={200}
                  className="card-img-top"
                  alt={r.title}
                  onError={e => { e.target.src = 'https://source.unsplash.com/400x250/?travel'; }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{r.title}</h5>
                  <p className="card-text mb-2">Hosted by {r.host}</p>
                  <p className="small text-muted mb-2">{r.location}</p>
                  <p className="text-secondary mb-3">₹{r.price}/night — {r.description}</p>
                  <div className="mt-auto">
                    <Link to={`/listing/${r.id}`} className="btn btn-outline-light me-2">Details</Link>
                    <Link to={`/host/${r.id}`} className="btn btn-primary">Contact Host</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="col-12">
              <p className="text-center text-light mt-4">No homestays found for "{query}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
