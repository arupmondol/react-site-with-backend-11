import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {img, name, price, category}= service
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ml-4 mt-8 mb-8">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Name:
      <div className="badge badge-secondary">{category}</div>
    </h2>
   
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> Cost:{price}$</div> 
      
    </div>
    <button className='btn btn-primary'><Link to='/details'>Deatails</Link></button>
  </div>
</div>
    </div>
  );
};

export default Service;