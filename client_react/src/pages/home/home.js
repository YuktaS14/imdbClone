import React, { useEffect, useState } from 'react';
import './home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MoviesList from '../../components/moviesList/moviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const getData = () => {
        fetch('http://localhost:3001/')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setMovies(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.toString());
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}>
                {movies.map(movie => (
                    <Link
                        key={movie.id}
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/movie/${movie.id}`}>
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie.original_title}</div>
                            <div className="posterImage__runtime">
                                {movie.release_date}
                                <span className="posterImage__rating">
                                    {movie.vote_average}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="posterImage__description">
                            {movie.overview.split(' ').slice(0, 20).join(' ')}
                            {movie.overview.split(' ').length > 20 && '...'}
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
            <MoviesList />
        </div>
    );
};

export default Home;
