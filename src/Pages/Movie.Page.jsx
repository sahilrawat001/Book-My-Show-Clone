import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Slider from 'react-slick';
import Cast from "../components/Cast/CastComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.Components";
 

const MoviePage = () => {
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

    const cast = [
        {
            profile_path:
                "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jodie-comer-iein098307-12-08-2021-12-19-44.jpg  ",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
        {
            profile_path:
                "https://media.vanityfair.com/photos/5f6e0d388f3d1388648ddf94/4:3/w_1779,h_1334,c_limit/vin.jpg",
            original_name: "Vin Diesel",
            character: "Dominic Toretto",
        },
    ];

    const similarMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },



        
            {
                src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
                title: "Fast and Furious 9",
                subtitle: "Action / Adventure / Crime / Thriller",
            },
            {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
            title: "Fast and Furious 9",
         
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
    ];




    return (<>
        <MovieHero />
        <div className=' container px-4 lg:ml-20 lg:w-2/3'>
            <div className='my-8 flex flex-col items-start gap-3'>
                <h1 className='text-gray-900 font-bold text-2xl'>
                    About the movie
                </h1>
                <p>
                    Shang-Che and The Legend of The Ten Rings features Simu Liu as Shang-Chi,
                    who must confront the past he thought he left behind when he is drawn into
                    the web of the mysterious Ten Rings organization. The film is directed by
                    Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
                </p>
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
          
        <div castName='my-8'>
            <PosterSlider config={settings} title='Recommended Movies' posters={similarMovies} isDark={false} />
        </div>
  
        <div className="my-8">
                <hr />
            </div>

            <div className="my-8">
                <hr />
            </div>
            <PosterSlider config={settings} title='You might also like' posters={similarMovies} isDark={false} />


        </div>

    </>
    );
};

export default MoviePage;