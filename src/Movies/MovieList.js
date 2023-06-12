import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Movie addToSavedList={props.addToSavedList} movie={movie} />
      ))}
    </div>
  );
}
