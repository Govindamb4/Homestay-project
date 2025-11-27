import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/sampleData';

export default function HostProfile() {
  const { id } = useParams();
  const user = users.find(u => u.id === Number(id));

  if (!user) return <div className="text-center py-5"><h3>User not found</h3></div>;

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2>{user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rating:</strong> {user.rating} ⭐</p>
        <p className="mt-3">“Welcome to my listing! Feel free to reach out for local travel tips.”</p>
        <button className="btn btn-outline-light">Contact</button>
      </div>
    </section>
  );
}
