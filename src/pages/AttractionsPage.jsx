import React from 'react';
import { attractions } from '../data/sampleData';

export default function AttractionsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Local Attractions</h2>
        <div className="row">
          {attractions.map(a => (
            <div className="col-md-4 mb-4" key={a.id}>
              <div className="card h-100">
                <img src={a.image} alt={a.name} className="card-img-top" />
                <div className="card-body">
                  <h5>{a.name}</h5>
                  <p>{a.description}</p>
                  <p className="text-muted">{a.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
