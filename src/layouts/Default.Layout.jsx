import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
 const DefaultLayout =(props)=>{
return(
    <div>
         <Navbar/> 
      
       {props.children}
       <div>Footerses</div>
 
    </div>
);
};
export default DefaultLayout;