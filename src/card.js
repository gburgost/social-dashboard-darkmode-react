import React from "react";
import "./card.css";

function Card({ username, followers, todayFollowers, social }) {
  return (
    <article className={`card ${social}`}>
      <p className="card-title">
        <img src={`images/icon-${social}.svg`} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {todayFollowers} Today
      </p>
    </article>
  );
}

export default Card;
