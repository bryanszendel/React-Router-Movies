import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    {console.log('Saved List props', props)}
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <ul>
        <li>
          <NavLink to={`/movies/${movie.id}`} key={movie.title} className="saved-movie">{movie.title}</NavLink>
        </li>
      </ul>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
