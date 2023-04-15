import React from 'react';
import CardIcon from './CardIcon';


export const Header = () => {
  return ( 
    <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-semibold'>React ve Tailwind CSS Sepet Uygulaması</h1> 
      
       <CardIcon/>
    </div>  
  )
}
