import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchPreview(){
  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-light text-center mb-4">Top Picks</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x250/?homestay" className="card-img-top" alt="homestay"/>
              <div className="card-body">
                <h5 className="card-title">Cozy Vijayawada Retreat</h5>
                <p>Hosted by Local Guide. $50/night.</p>
                <Link to="/listing/1" className="btn btn-outline-light">View</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/search" className="btn btn-primary">See all listings</Link>
        </div>
      </div>
    </section>
  );
}
