import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Movie(props) {
  const navigate = useNavigate()
  const [movie, setMovie] = useState();

  let {id} = useParams()

  useEffect(() => {
    if(props.movie){
      setMovie(props.movie)
    }else{
      axios
        .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
        .then(res => {
          setMovie(res.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div onClick={()=>navigate(`/movies/${movie.id}`)} className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>

        {!props.movie && <h3>Actors</h3>}
        {!props.movie
          ?stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))
          :null
        }
      </div>
      <div onClick={()=>props.addToSavedList(movie)} className="save-button">Save</div>
    </div>
  );
}
