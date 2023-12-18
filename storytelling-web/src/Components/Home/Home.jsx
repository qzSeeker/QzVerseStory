import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-page-container" id="hero">
      <header className="home-header">
        <h1>Welcome to QzSeekerVerse.com</h1>
        <p>Embark on a Journey of Imagination and Discovery</p>
      </header>


        <h1 className="featured-title">Featured Stories</h1>

      <div className="featured-stories">
          <div className="featured-img f-img-1">
            <p>What's your's story?</p>
            <img src="src\assets\Stories-Images\jon-tyson-c6b2ru3S4qo-unsplash.jpg"></img>
          </div>
          <div className="featured-img f-img-2">
            <p>Story that heals</p>
            <img src="src\assets\Stories-Images\mj-s-cw2ai6A_eeM-unsplash.jpg"></img>
          </div>
          <div className="featured-img f-img-3">
            <p>What next story?</p>
            <img src="src\assets\Stories-Images\reuben-juarez-C4sxVxcXEQg-unsplash.jpg"></img>
          </div>
      </div>
    </div>
  );
}
