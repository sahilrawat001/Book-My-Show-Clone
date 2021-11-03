import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component';
export default function PosterSlider(props) {

   

    const settings = {
        // dots: true,
        Arrows:false,
           infinite: false,   
          autoplay: false,
          slidesToShow: 5,
         
          slidesToScroll: 4,
          InitialSlide:0,
          responsive: [{
              breakpoints:1024,
              settings:{
            
                infinite: false,              
               autoplay: false,
               slidesToShow: 5,             
               slidesToScroll: 4,
               InitialSlide:0,

              },

          },
             {  breakpoints:480,
              settings:{           
                infinite: false,              
               autoplay: false,
               slidesToShow: 2,             
               slidesToScroll: 1,
               InitialSlide:0,

              },

          },
        ]
        };
const {isDark, title,subtitle,posters,config }=props;
 const currentSettings= config ? config : settings;

    return (
        <div className=''>
            <div className="   flex flex-col items-start my-2">
          <h3 className={`text-2xl font-bold sm:text-xl ${
            isDark ?"text-white": "text-black"
          
          }  `}>
         {title} 
           </h3>
        <p className={`text-sm ${ isDark ?"text-white": "text-black" }` }>
          {subtitle}   
        </p>
            </div>
            <Slider {...currentSettings }>
           {posters.map((each)=>(
               <Poster {...each } isDark={isDark} />
           )
             ) }

            </Slider>
        </div>
    );
}
