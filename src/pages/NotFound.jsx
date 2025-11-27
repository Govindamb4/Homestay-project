import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="btn btn-primary">Go home</Link>
      </div>
    </section>
  );
}
