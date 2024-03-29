import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie/'+id,
                    state: {
                        year: year,
                        title: title,
                        summary: summary,
                        poster: poster,
                        genres: genres,
                    },
                }}
            >
                <img src={poster} alt={title} title={title}></img>
                <div className="movies__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="moive__year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p 
                        className="movie__summary" 
                        dangerouslySetInnerHTML={{__html: summary}}
                    ></p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;