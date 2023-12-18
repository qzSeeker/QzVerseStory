import React, { useState } from "react";
import "./Story.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Story() {
  const [stories, setStories] = useState([
    {
      title: "Whispers of the Forgotten",
      category: "Mystery",
      discription:
        "Uncover the secrets of a forgotten village as an adventurer seeks to break an ancient curse, revealing tales of hidden truths and untold stories.",
    },
    {
      title: "Chronicles of Lumina",
      category: "Fantasy",
      discription:
        "Embark on a magical journey in the realm of Lumina, where a young dreamweaver discovers a portal to a parallel world, restoring balance between dreams and reality.",
    },
    {
      title: "Ephemeral Eternity",
      category: "Science Fiction",
      discription:
        "Explore a futuristic city where memories are currency, as an artist stumbles upon a discarded chip, unraveling a love story that questions the true cost of remembering.",
    },
    {
      title: "The Clockwork Conspiracy",
      category: "Romance",
      discription:
        "Encounter a forbidden love story between a shipwreck survivor and enchanting sirens, challenging the balance of nature on a distant island.",
    },
    {
      title: "Chronicles of Lumina",
      category: "Historical Fiction",
      discription:
        "Dive into a world of gears and gadgets as a brilliant inventor uncovers a plot to control time, racing against the clock to prevent a catastrophe.",
    },
    {
      title: "Shadows of Tomorrow",
      category: "Adventure",
      discription:
        "Join a group of survivors in a post-apocalyptic world as they embark on a perilous journey towards a mysterious signal, discovering that the true challenge lies within themselves.",
    },
  ]);

  const [selectedCat, setSelectedCat] = useState("All");
  function handleCatChange(category) {
    setSelectedCat(category);
  }

  // Filter the stories based on the selected category
  const filteredStories =
    selectedCat === "All"
      ? stories
      : stories.filter((story) => story.category === selectedCat);

  return (
    <div className="story-page-container">
      <h1>Discover Captivating Stories</h1>

      <div>
        <label>
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </label>
        <select onChange={(e) => handleCatChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>

      {/* List of Stories */}
      <div>
        <h2>Stories</h2>
        <ul>
          {filteredStories.map((story, index) => (
            <li>
              <strong>{story.title}</strong> - {stories.category}
              <p>{story.discription}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
