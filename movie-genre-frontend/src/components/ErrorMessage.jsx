import "./ErrorMessage.css";

export default function ErrorMessage({ message }) {
  return (
    <div className="error-box">
      <span className="error-icon">⚠️</span>
      <div>
        <strong>Something went wrong</strong>
        <p>{message || "Could not connect to the backend. Make sure your Spring Boot services are running."}</p>
      </div>
    </div>
  );
}
