# IMDB Clone using React + Node.js + PostgreSQL

## Overview

This project is an IMDB clone built using React for the frontend, Node.js for the backend, and PostgreSQL for the database. It provides functionalities similar to IMDB, such as displaying a list of popular movies, showing movie details, and implementing a carousel for movie posters.

## Setup

1. **Restore 'imdb' Database:**
   To restore the 'imdb' database, run the following command:

```pg_restore -U postgres -c -n public -d imdb /MovieDump.tar```



2. **Starting the Backend Server:**
Navigate to the server directory and run:

```npm start```

This will start the backend server on port 3001.


3. **Starting the React Server:**
Navigate to the client directory and run:

```npm start```

This will start the react server on port 3000.



## Technologies Used

- **React:** Used for building the frontend user interface.
- **Node.js:** Used for building the backend server to handle API requests and interact with the database.
- **PostgreSQL:** Used as the database to store movie data.
- **React Router:** Used for navigation between different pages in the React application.

## Folder Structure

- **server:** Contains the backend Node.js code.
- **client:** Contains the frontend React code.
- **postgres:** Contains the code for storing data into database.

## Main Implementations

- **Fetching Data from API:** Data is fetched from 'https://api.themoviedb.org/3/movie/popular' via an API call.
- **Storing Data in Database:** Fetched data is stored in the PostgreSQL database using Node.js.
- **Displaying Movie Cards:** The home page displays movie cards for popular movies fetched from the database.
- **Carousel for Movie Posters:** A carousel is implemented to display movie posters on the home page.
- **Movie Detail Page:** Clicking on a movie card navigates to a detailed page showing information about the selected movie.
