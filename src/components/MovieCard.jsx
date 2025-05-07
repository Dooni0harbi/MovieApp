import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({ title, poster_path, overview, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="movie"
      id="container"
      onClick={() => navigate("/details/" + id)}
    >
      {poster_path ? (
        <img
          src={IMG_API + poster_path}
          alt={title}
          className="object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-white flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <div className="flex align-center justify-between p-1 text-white">
        <h5 className="p-3">{title}</h5>
      </div>
      <div className="movie-over">
       <h2>Overview</h2>
       <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
