import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import Play from "./Pages/Play.Page";
 
function App() {
  return (
    <>
    
     <DefaultHOC path='/' exact component={HomePage}/>
     <MovieHOC path='/movie/:id' exact component={MoviePage}/>
     <DefaultHOC path='/play' exact component={Play}/>
    </>
  );
} 

export default App;
 