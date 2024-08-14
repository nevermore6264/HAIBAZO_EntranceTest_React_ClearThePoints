import React from "react";
import styles from "../styles/ControlPanel.module.css";

const ControlPanel = ({ points, setPoints, onStart, isPlaying }) => {
  return (
    <div className={styles.controlPanel}>
      <label>
        Points:
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value) || 0)}
          disabled={isPlaying}
          min={0}
        />
      </label>
      <button onClick={onStart}>{isPlaying ? "Restart" : "Play"}</button>
    </div>
  );
};

export default ControlPanel;
