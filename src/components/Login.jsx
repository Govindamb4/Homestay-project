import React from 'react';

export default function Login(){
  function handleSubmit(e){
    e.preventDefault();
    alert('Demo login — integrate real auth (Firebase / backend) later.');
  }

  return (
    <section id="login" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>
        <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
          <div className="col-md-4"><input type="email" className="form-control" placeholder="Email" required/></div>
          <div className="col-md-4"><input type="password" className="form-control" placeholder="Password" required/></div>
          <div className="col-md-2"><button type="submit" className="btn btn-primary w-100">Login</button></div>
        </form>
        <p className="text-center mt-3">Sign up as: <a href="#">Admin</a> | <a href="#">Host</a> | <a href="#">Tourist</a> | <a href="#">Guide</a></p>
      </div>
    </section>
  );
}
