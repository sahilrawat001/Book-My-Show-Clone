import React from "react";
import {BiSearch,BiMenu , BiChevronDown,  BiShareAlt} from 'react-icons/bi';
function NavSm(){
    return(<> 
    <div className='text-black flex items-center justify-between'>
        <div>
<h3 className='text-xl font-bold  '> Fast and Furious 9</h3>
   

        </div>
   <div className='w-8 h-8'>
       <BiShareAlt className='w-full  h-full'/>
   </div>
    </div>
    
    
    </>);
}
 
function NavLg(){
    return<>
        <div className='container flex mx-auto px-4 items-center justify-between'>
            <div className='flex items-center w-1/2 gap-3'>
                <div className='w-10 h-10'>

                <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png ' alt='' className='w-full h-10'/>
                </div>
                <div className='   w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md'> 
                  <BiSearch/>
                  <input type ='search' className='w-full bg-transparent border-none focus:outline-none'
                   placeholder='search for Movies,Events,Plays,Sports and Activities '/>
                    </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-300 text-base flex items-center cursor-pointer  hover:text-white'>
                    Delhi NCR <BiChevronDown/>
                </span>
                <button className='bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-500'>
                    Sign In
                </button>
                <div className="w-10 h-10 text-white">
                    <BiMenu className='w-full h-full'/>
                </div>
            </div>
        </div>
    </>;
}

const MovieNavbar=()=>{
    return <> 
     <nav className=" bg-white  border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4 ">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavSm />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>

        </>;
};
export default MovieNavbar;