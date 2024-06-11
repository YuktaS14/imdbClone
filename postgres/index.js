import fetch from 'node-fetch';
import pkg from 'pg';
const { Client } = pkg;

// TMDb API URL and your API key
const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

// PostgreSQL connection configuration
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'imdb',
    password: '1234',
    // port: 5432,
});

async function fetchMovies() {
    try {
        const response = await fetch(TMDB_API_URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data from TMDb API:', error);
        return [];
    }
}

async function saveMoviesToDatabase(movies) {
    try {
        await client.connect();

        for (const movie of movies) {
            const {
                id,
                original_title,
                title,
                overview,
                release_date,
                vote_average,
                poster_path,
                backdrop_path,
            } = movie;

            const query = `
                INSERT INTO movies (id, original_title, title, overview, release_date, vote_average, poster_path, backdrop_path)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT (id) DO NOTHING
            `;

            const values = [id, original_title, title, overview, release_date, vote_average, poster_path, backdrop_path];

            await client.query(query, values);
        }

        console.log('Movies saved to database successfully.');
    } catch (error) {
        console.error('Error saving data to PostgreSQL:', error);
    } finally {
        await client.end();
    }
}

(async () => {
    const movies = await fetchMovies();
    await saveMoviesToDatabase(movies);
})();
