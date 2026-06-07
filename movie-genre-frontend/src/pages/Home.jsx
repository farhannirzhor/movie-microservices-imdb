import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-tag">Spring Boot Microservices + React</div>
        <h1 className="home-title">CineBase</h1>
        <p className="home-sub">
          Browse movies and genres powered by your microservice backend — Genre Service, Movie Service, API Gateway & Eureka Discovery.
        </p>
        <div className="home-actions">
          <Link to="/genres" className="btn-primary">Browse Genres</Link>
          <Link to="/movies" className="btn-secondary">All Movies</Link>
        </div>
      </div>

      <div className="home-cards">
        <div className="info-card">
          <div className="info-card-icon">🗂️</div>
          <h3>Genre Service</h3>
          <p>Fetches all genres and their associated movies via inter-service communication.</p>
          <code>:8090 / gateway /genre</code>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🎥</div>
          <h3>Movie Service</h3>
          <p>Serves movie data filtered by genre ID using JdbcTemplate and MySQL.</p>
          <code>:8091 / gateway /movie</code>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🔀</div>
          <h3>API Gateway</h3>
          <p>Single entry point that routes all requests to the correct microservice.</p>
          <code>localhost:8080</code>
        </div>
        <div className="info-card">
          <div className="info-card-icon">📡</div>
          <h3>Eureka Discovery</h3>
          <p>Service registry that enables load-balanced RestTemplate calls between services.</p>
          <code>localhost:8761</code>
        </div>
      </div>
    </div>
  );
}
