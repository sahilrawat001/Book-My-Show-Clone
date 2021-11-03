import React from 'react';
import { Link } from 'react-router-dom';
 

export default function Poster(props) {
    return (
        <Link to={`/movie/${props.id}`}>
        
        <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
            <div className ='h-40 md:h-80'> 
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path} `} alt='poster' className='w-full h-full rounded-md'/>
             </div>
             <h3 className={`  lg:text-xl font-bold md:text-lg sm:text-xs ${ props.isDark ?"text-white": "text-gray-800"}  `}>
    
             {props.title}    </h3>
       <p className=" md:overflow-clip ...">
       <h3 className={`  text-sm gap-2
         ${ props.isDark ?"text-white": "text-gray-700"}  `}>
           {props.subtitle} 
       </h3></p>
        </div>
             </Link>
    )
}
