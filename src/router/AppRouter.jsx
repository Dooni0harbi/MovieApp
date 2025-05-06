import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details/:id" element={<PrivateRouter />}>
    <Route path="movie/:id" element={<MovieDetail />} />
    
    <Route path="/details/:id" element={<MovieDetail />} /></Route>
    </Routes>
  );
};

export default AppRouter;


