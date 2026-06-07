import axios from "axios";

const GENRE_URL = "http://localhost:8090";
const MOVIE_URL = "http://localhost:9010";

export const getAllGenres = () =>
  axios.get(`${GENRE_URL}/genre/all`).then((res) => res.data);

export const getGenreById = (id) =>
  axios.get(`${GENRE_URL}/genre/${id}`).then((res) => res.data);

export const getAllMovies = () =>
  axios.get(`${MOVIE_URL}/movie/all`).then((res) => res.data);

export const getMoviesByGenre = (genreId) =>
  axios.get(`${MOVIE_URL}/movie/genre/${genreId}`).then((res) => res.data);