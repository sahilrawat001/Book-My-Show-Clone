
import React from 'react'

function Cast(props) {
    return (
        <div>
            <div className='flex flex-col items-center'>
               <div className='w-32 h-32'>
                   <img src={props.image} alt='crew member' className='w-full h-full origin-center object-cover rounded-full'/>  
                </div> 
                <h1 className='text-xl text-gray-800' >{props.castName} </h1>
                <h5 className="text-sm text-gray-700" >{props.role}</h5>
            </div>
        </div>
    )
}
export default Cast;
