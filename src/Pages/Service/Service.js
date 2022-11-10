import React from 'react';

const Service = ({service}) => {
  const {img, name, price}= service
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ml-4 mt-8 mb-8">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">{name}</div>
    </h2>
    <p>{name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}</div> 
    </div>
  </div>
</div>
    </div>
  );
};

export default Service;