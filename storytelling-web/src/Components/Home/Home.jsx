import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-page-container" id="hero">
      <header className="home-header">
        <h1>Welcome to QzSeekerVerse.com</h1>
        <p>Embark on a Journey of Imagination and Discovery</p>
      </header>

      <section className="home-intro">
        <p>
          At QzSeekerVerse.Com, we believe in the power of storytelling to
          transport you to new worlds, evoke emotions, and ignite your
          imagination.
        </p>
        <p>
          Your journey is not passive; it's a collaboration. Engage with
          interactive elements that allow you to shape the narrative. Your
          choices matter, and the story evolves based on your decisions.
        </p>
      </section>
      <section className="home-join-us">
        <p>
          QzSeekerVerse.com is not just a platform; it's an invitation to
          immerse yourself in a world of stories waiting to be explored. Are you
          ready to embark on this literary journey? Dive in, discover, and let
          your imagination soar!
        </p>
        {/* <Link to="/story" className="cta-button">
        <button className="get-started-btn">Get Started</button>
      </Link> */}
      </section>
    </div>
  );
}
