import React from 'react';

export default function Attractions(){
  return (
    <section id="attractions" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nearby Attractions</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/random/300x200/?temple" className="card-img-top" alt="Attraction" />
              <div className="card-body">
                <h5 className="card-title">Kanaka Durga Temple</h5>
                <p>Sacred temple on Indrakeeladri Hill. Best during Dasara festival.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
