import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [playerName, setPlayerName] = useState(name);
  const [editing, setIsEditing] = useState(false);

  const playerEditHandler = (e) => {
    if (playerName.trim() === "") {
      alert("enter player name ");
      return;
    }
    setIsEditing((preVal) => !preVal);
  };

  const nameChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <div className="player">
        {editing ? (
          <input
            type="text"
            id="player-input"
            onChange={nameChangeHandler}
            value={[playerName]}
            placeholder="Enter Name"
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol" value={playerName}>
          {symbol}
        </span>
      </div>
      <button className="edit-btn" onClick={playerEditHandler}>
        {!editing ? "edit" : "save"}
      </button>
    </li>
  );
};

export default Player;
