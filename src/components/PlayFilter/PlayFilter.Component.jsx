import React from 'react'
import { Disclosure } from '@headlessui/react';
import { BiChevronsDown, BiChevronUp } from 'react-icons/bi';
export default function PlayFilter(props) {
    return (
         <Disclosure>
       {
           ({open})=>(
               <>
               <Disclosure.Button  className='py-2 flex items-center gap-3'>
                   {open?<BiChevronUp/>:<BiChevronsDown/> }
                   <span className={open?"text-red-600":"text-gray-700"}>
                       {props.title}
                   </span>
               </Disclosure.Button>
               <Disclosure.Panel className='text-gray-500'>
                   <div className='flex items-center gap-3 flex-wrap'>
                       {props.tags.map(  (tag)=>(
                           
                           <div className='border-2 border-gray-200 px-3'>
                            <span className='text-red-600'>
                                {tag}
                            </span>

                           </div>
                           
                       )

                       ) }
                   </div>


               </Disclosure.Panel>
               </>
           )
       }

         </Disclosure>
    )
}
