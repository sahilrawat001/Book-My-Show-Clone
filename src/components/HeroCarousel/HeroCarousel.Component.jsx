import axios from "axios";
import React,{useState, useEffect} from "react";


import HeroSlider from 'react-slick';
import { NextArrow,PrevArrow } from "./Arrows.Component";


const HeroCarousel=()=>{
const [ images,setImages]= useState( [  ]);
      
  useEffect(()=>{
    const requestNowPlayingMovies= async ()=>{
    const getImages= await   axios.get('/movie/now_playing');
    setImages(getImages.data.results);
  };
  requestNowPlayingMovies();
} ,[] );
const settingsLG = {
   
    arrows:true,
    centerMode: true,
    centerPadding:'100px',
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    slidesToScroll: 1
  };
const settings = {
  // dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    slidesToScroll: 1
  };
 return(<>

   <div className="lg:hidden"> 
   <HeroSlider {...settings} >

     { images.map( (image)=>(
       <div className="h-56 w-full md:h-80 py-3  " >
         <img src={ `https://image.tmdb.org/t/p/original${image.backdrop_path} `} alt='Hero banner' className='w-full h-full object-center'/>
       </div>
      
       )  )   }
         </HeroSlider>
    </div>
   <div className="hidden lg:block">
     <HeroSlider {...settingsLG}>
       { images.map( (image)=>(
       <div className='w-full h-96 px-2 py-3  ' >
      
         <img src={  `https://image.tmdb.org/t/p/original${image.backdrop_path} `} alt='Hero banner' className='w-full h-full rounded-md object-center'/>
       </div>
      
       )  )   }
      </HeroSlider>
     </div> 
   </>);
}
export default HeroCarousel;