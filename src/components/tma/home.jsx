import React from 'react';
import image1 from "./image.png";
import "./home.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>Gaming App</h1>
      </header>
      <main>
        <section className="hero">
          <img src={image1} alt="Hero Image" />
          <h2>Welcome to the Ultimate Gaming Experience</h2>
        </section>
        <section className="features">
          <h3>Features</h3>
          <div className="feature-list">
            <div className="feature-item">
              <img src={image1} alt="Feature 1" />
              <p>Exciting Multiplayer Modes</p>
            </div>
            <div className="feature-item">
              <img src={image1} alt="Feature 2" />
              <p>Stunning Graphics</p>
            </div>
            <div className="feature-item">
              <img src={image1} alt="Feature 3" />
              <p>Challenging Levels</p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h3>Join Now</h3>
          <button>Download</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Gaming App. All rights reserved.</p>
      </footer>
    </>
  );
}
