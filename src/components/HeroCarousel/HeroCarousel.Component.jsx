import React,{useState} from "react";


import HeroSlider from 'react-slick';
import { NextArrow,PrevArrow } from "./Arrows.Component";


const HeroCarousel=()=>{
const [ images,setImages]= useState( [
    "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
]);
const settingsLG = {
   
    arrows:true,
    centerMode: true,
    centerPadding:'20px',
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
       <div className="h-56 w-full md:h-80 py-3 " >
         <img src={image} alt='Hero banner' className='w-full h-full object-center'/>
       </div>
      
       )  )   }
         </HeroSlider>
    </div>
   <div className="hidden lg:block">
     <HeroSlider {...settingsLG}>
       { images.map( (image)=>(
       <div className='w-full h-96 px-2 py-3 ' >
      
         <img src={image} alt='Hero banner' className='w-full h-full rounded-md object-center'/>
       </div>
      
       )  )   }
      </HeroSlider>
     </div> 
   </>);
}
export default HeroCarousel;