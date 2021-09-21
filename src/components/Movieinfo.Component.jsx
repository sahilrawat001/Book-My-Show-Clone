
import React from 'react'

export default function Movieinfo({movie}) {
    return (<>
        <div className='flex flex-col gap-8'>
            <h1 className='text-white text-5xl font-bold'>
                {movie.original_title}
            </h1>
            <div className='flex flex-col gap-3 text-xl'>
            <h4 className='text-white my-2 text-4xl'>4k ratings</h4>
  <h4 className='text-white my-2 text-3xl'>english,hindi,punjabi</h4>
             <div className="flex flex-col text-white bg-transparent  text-xl">
                   {movie.overview}
            </div>
            </div>
            <div className='flex items-center px-4   gap-2   text-xl'>
  <button className='bg-red-500 text-white rounded-md py-3 px-4 w-auto hover:bg-red-600'>Buy ₹200</button>
  <button className='bg-red-500 text-white rounded-md py-3 px-4 w-auto hover:bg-red-600'>Rent ₹150 </button>
</div>
        </div>
        </>
    )
}
