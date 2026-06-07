import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGenres } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";
import "./Genres.css";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    getAllGenres()
      .then((data) => {
        setGenres(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner message="Fetching genres..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="genres-page">
      <div className="page-header">
        <h1 className="page-title">Genres</h1>
        <p className="page-sub">
          {genres.length} genres found — click any to expand its movies
        </p>
      </div>

      <div className="genre-list">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genre-item ${expanded === genre.id ? "open" : ""}`}
          >
            <button
              className="genre-header"
              onClick={() =>
                setExpanded(expanded === genre.id ? null : genre.id)
              }
            >
              <div className="genre-left">
                <span className="genre-id">#{genre.id}</span>
                <span className="genre-name">{genre.name}</span>
              </div>
              <div className="genre-right">
                <span className="genre-count">
                  {genre.movieList?.length ?? 0} movies
                </span>
                <span className="genre-chevron">
                  {expanded === genre.id ? "▲" : "▼"}
                </span>
              </div>
            </button>

            {expanded === genre.id && (
              <div className="genre-movies">
                {genre.movieList && genre.movieList.length > 0 ? (
                  <div className="movie-grid">
                    {genre.movieList.map((movie, i) => (
                      <MovieCard key={movie.id ?? i} movie={movie} />
                    ))}
                  </div>
                ) : (
                  <p className="no-movies">No movies found for this genre.</p>
                )}
                <div className="genre-footer">
                  <Link to={`/genres/${genre.id}`} className="genre-detail-link">
                    View Genre Detail →
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
