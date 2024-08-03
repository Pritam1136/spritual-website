import "./NoPage.css";

function NoPage() {
  return (
    <div className="no-page">
      <div className="container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page Not Found</p>
        <a href="/" className="home-link">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default NoPage;
