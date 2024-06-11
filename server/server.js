const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./data/data'); // Ensure this exports a connected client
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Root route to get all movies
app.get('/', async (req, res) => {
    const query = 'SELECT * FROM movies';
    
    try {
        const { rows } = await dbConnect.query(query);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching movies:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get a movie by ID
app.get('/movie/:id', async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM movies WHERE id = $1';
    
    try {
        const { rows } = await dbConnect.query(query, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error('Error fetching movie:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
