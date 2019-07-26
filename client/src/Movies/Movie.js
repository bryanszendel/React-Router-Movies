import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link, Route } from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  console.log("Movie Props", props)
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div className="movie-card">Loading movie information...</div>;
  }

  return (
  <MovieCard movie={movie} saveMovie={saveMovie} />
  );
}

export default Movie;
