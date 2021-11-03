import React ,{useContext,useEffect,useState} from  "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Slider from 'react-slick';
import axios from "axios";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/Movie.Context";
import Cast from "../components/Cast/CastComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.Components";
 

const MoviePage = () => {

    const { movie } = useContext(MovieContext);
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(
                `/movie/${id}/recommendations`
            );
            setRecommended(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);







    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
 



    return (<>
        <MovieHero />
        <div className=' container px-4 lg:ml-20 lg:w-2/3'>
            <div className='my-8 flex flex-col items-start gap-3'>
                <h1 className='text-gray-900 font-bold text-2xl'>
                    About the movie
                </h1>
                <p>
                   {movie.overview}  </p>
            </div>


            <h1 className='mt-2  text-gray-900 font-bold text-2xl'>
                Applicable Offers
            </h1>
            <div className='mt-4 flex gap-4 flex-row'>
                <div className=' cursor-pointer  bg-yellow-100 block w-1/2 border-dashed border-2 border-yellow-400'>

                    <div className='flex flex-row'>
                        <div className='ml-2 w-10 h-7'>
                            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png ' alt='' className='w-full h-full ' />
                        </div>
                        <div className='flex flex-col items-start mx-2'>
                            <h1 className=' font-bold text-l md-2 mx-2'>
                                Filmy Pass
                            </h1>
                            <div className=' text-gray-800 my-1 mx-2 text-sm'>
                                Get RS.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' cursor-pointer  bg-yellow-100 block w-1/2 border-dashed border-2 border-yellow-400'>

                    <div className='flex flex-row'>
                        <div className='ml-2 w-10 h-7'>
                            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png ' alt='' className='w-full h-full ' />
                        </div>
                        <div className='flex flex-col items-start mx-2'>
                            <h1 className=' font-bold text-l md-2 mx-2'>
                                Visa Stream offer
                            </h1>
                            <div className=' text-gray-800 my-1 mx-2 text-sm'>
                                Get RS.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <hr />
            </div>

            <h2 className="text-gray-900 font-bold text-2xl mb-4">
                Cast and Crew
            </h2>
            <Slider {...settingsCast} >
                {
                    cast.map((castData) => (
                        <Cast
                            image={castData.profile_path}
                            castName={castData.original_name}
                            role={castData.character}
                        />
                    ))
                }
            </Slider>
            <div className="my-8">
                <hr />
            </div>
          
        <div className='my-8'>
            <PosterSlider config={settings} title='Recommended Movies' posters={similarMovies} isDark={false} />
        </div>
  
        <div className="my-8">
                <hr />
            </div>

            <div className="my-8">
                <hr />
            </div>
            <PosterSlider config={settings} title='You might also like' posters={recommended} isDark={false} />


        </div>

    </>
    );
};

export default MoviePage;