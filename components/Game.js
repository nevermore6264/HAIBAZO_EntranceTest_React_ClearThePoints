"use client";

import React, { useState } from "react";
import NumberButton from "./NumberButton";
import ControlPanel from "./ControlPanel";
import styles from "../styles/Game.module.css";

const Game = () => {
  const [points, setPoints] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    if (points > 0) {
      const newSequence = Array.from({ length: points }, (_, i) => i + 1);
      setSequence(newSequence);
      setNextNumber(1);
      setStatus("");
      setIsPlaying(true);
    }
  };

  const handleNumberClick = (number) => {
    if (number === nextNumber) {
      setNextNumber(nextNumber + 1);
      if (nextNumber === points) {
        setStatus("ALL CLEARED");
        setIsPlaying(false);
      }
    } else {
      setStatus("GAME OVER");
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.gameContainer}>
      {status && (
        <div
          className={`${styles.status} ${
            status === "ALL CLEARED" ? styles.success : styles.fail
          }`}
        >
          {status}
        </div>
      )}
      <h2>LET'S PLAY</h2>
      <ControlPanel
        points={points}
        setPoints={setPoints}
        onStart={handleStart}
        isPlaying={isPlaying}
      />
      <div className={styles.playArea}>
        {sequence.map((number) => (
          <NumberButton
            key={number}
            number={number}
            onClick={handleNumberClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
