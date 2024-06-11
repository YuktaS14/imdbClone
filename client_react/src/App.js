// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieDetail from './pages/movieDetail/movieDetail'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element = {<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="/*" element={<h1>Error Pg</h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
