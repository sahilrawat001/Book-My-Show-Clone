import axios from 'axios';
import React,{useState,useEffect} from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Components';

export default function HomePage() {
    const [recommendedMovies,setRecommendedMovies] = useState([]);


    const [premierMovies , setPremierMovies]=  useState([]);
    const [onlineStreamEvents , setOnlineStreamEvents ]= useState([]);
 
    useEffect( ()=>{
        const requestPopuarMovies=async()=>{
            const getPopularMovies= await axios.get('/movie/popular');
        setRecommendedMovies(getPopularMovies.data.results);
        };
        requestPopuarMovies();
    }, [] );
    useEffect( ()=>{
        const requestTopRateedMovies=async()=>{
            const getTopRatedMovies= await axios.get('/movie/top_rated');
        setPremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRateedMovies();
    }, [] );
    useEffect( ()=>{
        const requestUpcomingMovies=async()=>{
            const getUpcomingMovies= await axios.get('/movie/upcoming');
        setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, [] );





    return (
        <div>
            <HeroCarousel/>
            <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-3 text-gray-800">The best of Entertainment</h1>
            <EntertainmentCardSlider/>
            </div>
            <div className='container mx-auto px-4 my-8'>      
            <PosterSlider
            title= "Recommended Movies "
            subtitle="List of Recommended Movies "
            posters={recommendedMovies}
            isDark={false}
            />
            </div>

            <div className="bg-premier-800 py-12">
                <div className='container mx-auto px-4 flex-col gap-3 '>
                     <div className='hidden md:flex'>
                         <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='rupay' className='w-full h-full'/>
                     </div>
                     <PosterSlider
            title= "Premieres Movies"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
            />
                </div>
            </div>

            <div className='container mx-auto px-4 my-8'>      
            <PosterSlider
            title= " Online Streaming Events "
            
            posters={ onlineStreamEvents}
            isDark={false}
            />
            </div>
             
            
                        </div>
    );
}
 