import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    {console.log('Saved List props', props)}
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <ul>
        <li key={movie.title} className="saved-movie">{movie.title}</li>
      </ul>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
