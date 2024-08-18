import React from "react";
import styles from "../styles/ControlPanel.module.css";

const ControlPanel = ({ points, setPoints, onStart, isPlaying }) => {
  return (
    <div className={styles.controlPanel}>
      <label className={styles.label}>
        Points:
        <input
          type="number"
          className={styles.input}
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value) || 0)}
          disabled={isPlaying}
          min={0}
        />
      </label>
      <button
        className={styles.button}
        onClick={onStart}
        disabled={points <= 0}
      >
        {isPlaying ? "Restart" : "Play"}
      </button>
    </div>
  );
};

export default ControlPanel;
