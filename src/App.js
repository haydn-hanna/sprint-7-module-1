import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import axios from 'axios';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(res => {
          setMovies(res.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    setSaved([...saved,movie])
  };
  
  return (
    <div>
      <SavedList list={[...saved]} />

      <Routes>
        <Route path='/' element={<MovieList addToSavedList={addToSavedList} movies={movies}/>} />
        <Route path='/movies/:id' element={<Movie addToSavedList={addToSavedList} />} />
      </Routes>
    </div>
  );
}
