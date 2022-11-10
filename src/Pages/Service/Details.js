import React from 'react';

const Details = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add your opinion</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
      
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add a comment</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Details;