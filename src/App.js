import React from "react";
import axios from "axios";
import DefaultHOC from "./HOC/DefaultHOC";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import Play from "./Pages/Play.Page";
 
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params['api_key']=process.env.REACT_APP_API_KEY;
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
 