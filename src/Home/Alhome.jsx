import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Showhome from './Showhome';

const Alhome = () => {

   const homes = useLoaderData()
   // console.log(homes)

   return (
      <div>
             <h1>ALL Home: </h1>
             {
               homes?.map(home => 
                  <Showhome key={home.id} home={home}></Showhome>
                  )
             }
      </div>
   );
};

export default Alhome;