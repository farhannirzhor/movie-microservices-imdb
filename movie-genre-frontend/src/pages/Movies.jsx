import { useState, useEffect } from "react";
import { getAllMovies } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";
import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = movies;
    if (search) {
      result = result.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (yearFilter) {
      result = result.filter((m) => String(m.year).includes(yearFilter));
    }
    setFiltered(result);
  }, [search, yearFilter, movies]);

  if (loading) return <LoadingSpinner message="Loading movies..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="movies-page">
      <div className="movies-header">
        <div>
          <h1 className="page-title">Movies</h1>
          <p className="page-sub">
            {filtered.length} of {movies.length} movies
          </p>
        </div>
        <div className="movies-filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Filter by year..."
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="filter-input filter-year"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="movies-empty">No movies match your search.</div>
      ) : (
        <div className="movies-grid">
          {filtered.map((movie, i) => (
            <MovieCard key={movie.id ?? i} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
