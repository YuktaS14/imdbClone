import React, {useState, useEffect} from "react";
import "./moviesList.css"
import Card from "../card/card"


const MovieList = () => {

    const [movieList, setMovieList] = useState([])

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
                setMovieList(data);
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
    <div className="movie__list">
        <div className="list__cards">
            {
                movieList.map(movie => (
                    <Card movie={movie} />
                ))
            }
        </div>
    </div>
    )
}
export default MovieList;