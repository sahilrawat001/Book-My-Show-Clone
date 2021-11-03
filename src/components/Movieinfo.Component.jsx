
import React ,{useState} from 'react'
import PaymentModal from './PaymenModal/payment.component';

const MovieInfo = ({ movie }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const butMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };


     return (<>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />


 
        <div className='flex flex-col gap-8'>
            <h1 className='text-white text-5xl font-bold'>
                {movie.original_title}
            </h1>
            <div className='flex flex-col gap-3 text-xl'>
            <h4 className='text-white my-2 text-4xl'>   {movie.runtime} min • {genres}{" "}</h4>
  <h4 className='text-white my-2 text-3xl'>english,hindi,punjabi</h4>
             <div className="flex flex-col text-white bg-transparent  text-xl">
                   {movie.overview}
            </div>
            </div>
            <div className='flex items-center px-4   gap-2   text-xl'>
  <button  onClick={rentMovies} className='bg-red-500 text-white rounded-md py-3 px-4 w-auto hover:bg-red-600'>Buy ₹200</button>
  <button    onClick={butMovies} className='bg-red-500 text-white rounded-md py-3 px-4 w-auto hover:bg-red-600'>Rent ₹150 </button>
</div>
        </div>
        </>
    )
} 
export default MovieInfo;
