import React from 'react';

// eslint-disable-next-line react/prop-types
const Showhome = ({home}) => {

   // eslint-disable-next-line react/prop-types
   const {address, availabilityDate, bathrooms, bedrooms, city, id, name, picture, roomSize} = home;
   
   return (
      <div>
            <div className="card h-[490px] bg-base-100 shadow-xl">
   <img className=' h-52 w-full' src= {picture} alt="Shoes" /> 
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
     <div className='flex justify-around'>
                  <div>
                     <p>Address:{address}</p>
                     <p> City :{city}</p>
                     <p className='font-bold'> Date :{availabilityDate}</p>
                      
                  </div>
                  <div className=' border-l-4'>
                  <p> Roomsize:{roomSize}</p>
                  <p> Bedroom :{bedrooms}</p>
                  <p> Bathrooms :{bathrooms}</p> 
                  </div>
     </div>
     <div className="card-actions justify-end mt-2">
      <button className="btn btn-primary">Booking Now</button>
    </div>  </div>
</div>
      
   );
};

export default Showhome;