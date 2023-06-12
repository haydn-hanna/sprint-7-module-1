import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
      ))}
      <div onClick={()=>navigate('/')} className="home-button">Home</div>
    </div>
  );
}
