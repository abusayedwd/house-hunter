import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Showhome from './Showhome';

const Alhome = () => {

   const homes = useLoaderData()
   // console.log(homes)

   return (
      <div>
             <h1 className='text-center text-2xl py-4'>ALL House: </h1>
             <div  className='grid grid-cols-1 gap-2 md:grid-cols-3'>

             {
               homes?.map(home => 
                  <Showhome key={home.id} home={home}></Showhome>
                  )
             }
             </div>
      </div>
   );
};

export default Alhome;