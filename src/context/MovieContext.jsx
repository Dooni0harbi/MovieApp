// import { createContext, useState } from "react";
// export const MovieContext = createContext();

// const MovieContextProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch movie details by ID
//   const fetchMovieDetails = async (id) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
//       );
//       return await response.json();
//     } catch (error) {
//       setError("Failed to fetch movie details.");
//       console.error("Error fetching movie details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search for movies based on query
//   const searchMovies = async (query) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
//       );
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       setError("Failed to search movies.");
//       console.error("Error searching movies:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         movies,
//         loading,
//         error,
//         fetchMovieDetails,
//         searchMovies,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export default MovieContextProvider;
//________________________________________________________________________

// import { createContext, useState } from "react";

// export const MovieContext = createContext();

// const MovieContextProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchMovieDetails = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
//       );
//       if (!response.ok) throw new Error("Failed to fetch movie details");
//       return await response.json();
//     } catch (error) {
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const searchMovies = async (query) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
//       );
//       if (!response.ok) throw new Error("Failed to search movies");
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPopularMovies = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`
//       );
//       if (!response.ok) throw new Error("Failed to fetch popular movies");
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         movies,
//         loading,
//         error,
//         fetchMovieDetails,
//         searchMovies,
//         fetchPopularMovies
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export default MovieContextProvider;
       


// import { createContext, useState } from "react";

// export const MovieContext = createContext();

// const MovieContextProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch movie details by ID (still useful for MovieDetail page)
//   const fetchMovieDetails = async (id) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
//       );
//       return await response.json();
//     } catch (error) {
//       setError("Failed to fetch movie details.");
//       console.error("Error fetching movie details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search for movies based on query (you can keep this for Search feature)
//   const searchMovies = async (query) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
//       );
//       const data = await response.json();
//       return data.results;
//     } catch (error) {
//       setError("Failed to search movies.");
//       console.error("Error searching movies:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         loading,
//         error,
//         fetchMovieDetails,
//         searchMovies, // Keep for search functionality if needed
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export default MovieContextProvider;


//____________________________________________________________
// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const MovieContext = createContext();

// //  (provider)
// export const MovieContextProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // get movies
//   const getMovies = async (url) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(url);
//       setMovies(response.data.results);
//     } catch (err) {
//       setError("Failed to load movies, please try again.");
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         movies,
//         loading,
//         error,
//         getMovies,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export const useMovie = () => useContext(MovieContext);






// src/context/MovieContext.js
import { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setMovies(response.data.results || []);
    } catch (err) {
      setError("Failed to load movies, please try again.");
      console.error("API Error: ", err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(() => ({
    movies,
    loading,
    error,
    getMovies
  }), [movies, loading, error]);

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);

