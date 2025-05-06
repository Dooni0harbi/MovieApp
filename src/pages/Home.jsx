import React, { useEffect, useState, useContext } from "react";
import { useMovie } from "../context/MovieContext";
import { AuthContext } from "../context/AuthContext";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const apiKey = import.meta.env.VITE_TMDB_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const Home = () => {
  const { getMovies, movies, loading, error } = useMovie();
  const { currentUser } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!currentUser) {
      toastErrorNotify("You must be logged in to search movies!");

      // After the toast notification delay (3 seconds), navigate to login page
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page
      }, 3000); // 3 seconds delay (adjustable)

      return;
    }

    if (query.trim()) {
      const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      getMovies(SEARCH_URL);
    }
  };

  // Handle clicking on a movie card
  const handleMovieClick = (movieId) => {
    
    if (!currentUser) {
      toastErrorNotify("You must be logged in to view movie details!");
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page
      }, 3000); // 3 seconds delay (adjustable)

      return;
    }

    // If the user is logged in, navigate to the movie detail page
    navigate(`/movie/${movieId}`);
   
  };

  return (
    <>
      <Navbar />
      <div className="pt-[80px] p-4 max-w-7xl mx-auto">
        <form onSubmit={handleSearch} className="flex justify-center p-2">
          <input
            type="text"
            className="w-80 form-input h-11 mr-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
          />
          <button type="submit" className="btn-danger-bordered">
            Search
          </button>
        </form>

        <div className="movie-container">
          {!loading &&
            !error &&
            movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                {...movie}
                onClick={() => handleMovieClick(movie.id)} // Pass handleMovieClick to MovieCard component
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
