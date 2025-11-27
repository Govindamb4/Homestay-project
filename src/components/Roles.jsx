import React from 'react';

const roleInfo = [
  {title:'Admin', desc:'Manage platform content, user interactions, and listings.'},
  {title:'Homestay Host', desc:'List homestays, manage bookings, and interact with guests.'},
  {title:'Tourist', desc:'Search for homestays, book stays, and explore attractions.'},
  {title:'Local Guide', desc:'Provide insights and recommendations on nearby places.'}
];

export default function Roles(){
  return (
    <section id="roles" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">User Roles</h2>
        <div className="row">
          {roleInfo.map(r=> (
            <div className="col-md-3" key={r.title}>
              <div className="card text-center mb-3">
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p>{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
