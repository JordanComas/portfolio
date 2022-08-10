import React from "react";
import heel2toe from "../images/heel2toe.png";
import gamev from "../images/gamev.png";
import amazon from "../images/amazon.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="websites">
        <a href="https://heel2toe.netlify.app/" target="_blank">
          <h2>Heel2Toe</h2>
          <img src={heel2toe} alt="No Image Available" />
          <p className="date">August 2, 2022</p>
          <h3>Description</h3>
          <p>Full-stack website for looking up shoes</p>
        </a>
        <a href="https://gamev.netlify.app/" target="_blank">
          <h2>Gameverse</h2>
          <img src={gamev} alt="No Image Available" />
          <p className="date">August 2, 2022</p>
          <h3>Description</h3>
          <p>A website with a game API to look for any game</p>
        </a>
        <a
          href="https://jordancomas.github.io/Fighting-game-project/"
          target="_blank"
        >
          <h2>Amazon Warrior</h2>
          <img src={amazon} alt="No Image Available" />
          <p className="date">August 2, 2022</p>
          <h3>Description</h3>
          <p>A player VS player, 2D fighting game</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
