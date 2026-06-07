import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGenreById } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";
import "./GenreDetail.css";

export default function GenreDetail() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGenreById(id)
      .then((data) => {
        setGenre(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner message="Loading genre..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!genre) return null;

  return (
    <div className="genre-detail-page">
      <Link to="/genres" className="back-link">← Back to Genres</Link>

      <div className="genre-detail-header">
        <div className="genre-detail-id">#{genre.id}</div>
        <h1 className="genre-detail-title">{genre.name}</h1>
        <p className="genre-detail-count">
          {genre.movieList?.length ?? 0} movies in this genre
        </p>
      </div>

      {genre.movieList && genre.movieList.length > 0 ? (
        <div className="detail-movie-grid">
          {genre.movieList.map((movie, i) => (
            <MovieCard key={movie.id ?? i} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="detail-empty">
          <p>No movies found for this genre.</p>
        </div>
      )}
    </div>
  );
}
