import React, { useState, useEffect } from 'react'
import axios from '../Row/axios'
import requests from '../requests'
// import Movie from './Movie'
import './Banner.css'


function Banner({fetchURL}) {
    const [movie,setMovie] = useState([])
    // const [movieIndex, setMovieIndex] = useState(0)
    

 
    useEffect(() => {
        async function fetchData() {
       const request = await axios.get(requests.fetchTrending);
    setMovie(request.data.results[ Math.floor(Math.random()* request.data.results.length - 1 )]);

        //  LOGIC EXPLANATION
    //  Example from ChatGBT  = const randomIndex = Math.floor(Math.random() * myArray.length);
    //  And the reason we are doing minus 1 is so we dont risk it going over by a number! 
   
    return request;

        }
        fetchData()    
    },[])


//    Below is another way that i tried to acomplish rendering a random movie 👇🏼


    // if (!movie.length) {
    //     return <>Loading Movies...</>;
    //   }

      console.log(movie)

    // const advanceMovies = (/** @type {'next'|'previous'} */ direction) => {
    //     switch (direction) {
    //       // previous goes to the previous question, previous on the first question will return the last question from questions
    //       case "previous":
    //         setMovieIndex(movieIndex === 0 ? movie.length - 1 : movieIndex - 1);
    //         break;
    
    //       // next go to the next question, next on the last question will return the first question from questions
    //       case "next":
    //         setMovieIndex((movieIndex + 1) % movie.length);
    //         break;
    //       default: {
    //         console.log("Error: invalid action");
    //       }
    //     }
    //   };
    //   const movieList = (answer, mIndex = movieIndex) => {
    //     //set answer
    //     // advance to next qauestion
    //     advanceMovies("next");
    //   };
    
    //   const movies = movie[movieIndex];
    // console.log(setMovieIndex)


  return (
 
    <header className='banner'
     style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center"
     }}
     >
 
      <div className="banner_contents">
       <h1 className='banner_title' >{movie?.title || movie?.name || movie?.original_name}</h1>
      
    
       <div className="banner_buttons">
       <button className="banner_button">Play</button>
       <button className="banner_button">More Info</button>
       </div>

       <h1 className="banner_description">
        {movie?.overview}
       </h1>
      </div>
      <div className="banner_fade">
      </div>
    </header>
    
      

  )
}

export default Banner
