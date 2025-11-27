import React, { useState } from 'react';

const INITIAL = [
  {
    id:1, title:'Cozy Vijayawada Retreat', host:'Local Guide', price:50,
    description:'Near Kanaka Durga Temple', lat:16.44, lng:80.62,
    img:'https://source.unsplash.com/random/400x250/?homestay'
  }
];

export default function Search(){
  const [results, setResults] = useState(INITIAL);
  const [query, setQuery] = useState('Vijayawada');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  function handleSearch(e){
    e.preventDefault();
    const filtered = INITIAL.filter(r=> r.title.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered.length?filtered:INITIAL);
  }

  return (
    <section id="search" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Search Homestays</h2>
        <form className="row g-3 justify-content-center" onSubmit={handleSearch}>
          <div className="col-md-4"><input value={query} onChange={e=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Location (e.g., Vijayawada)" /></div>
          <div className="col-md-3"><input value={checkIn} onChange={e=>setCheckIn(e.target.value)} type="date" className="form-control" /></div>
          <div className="col-md-3"><input value={checkOut} onChange={e=>setCheckOut(e.target.value)} type="date" className="form-control" /></div>
          <div className="col-md-2"><button type="submit" className="btn btn-primary w-100">Search</button></div>
        </form>

        <div className="row mt-4">
          {results.map(r => (
            <div className="col-md-4" key={r.id}>
              <div className="card">
                <img src={r.img} className="card-img-top" alt="Homestay" />
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p>Hosted by {r.host}. ${r.price}/night. {r.description}</p>
                  <a href="#" className="btn btn-outline-light">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
