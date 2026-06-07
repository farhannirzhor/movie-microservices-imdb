import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-year">{movie.year}</div>
      <div className="movie-name">{movie.name}</div>
      {movie.genreId && (
        <div className="movie-genre-tag">Genre #{movie.genreId}</div>
      )}
    </div>
  );
}
