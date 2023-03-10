import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() =>{
   fetch('https://assingment11-server-site.vercel.app/services')
   .then(res =>res.json())
   .then(data =>setServices(data))

  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 bg-orange-700 mx-auto'>
      {
        services.map(service => <Service
        key={service.id}
        service={service}
        ></Service>)
      }
    </div>
  );
};

export default Services;