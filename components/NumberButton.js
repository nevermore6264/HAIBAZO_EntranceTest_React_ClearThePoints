import React from "react";
import styles from "../styles/NumberButton.module.css";

const NumberButton = ({ number, position, onClick, isClicked }) => {
  const handleClick = () => {
    if (!isClicked) {
      onClick(number);
    }
  };

  return (
    <button
      className={`${styles.numberButton} ${isClicked ? styles.active : ""}`}
      style={position}
      onClick={handleClick}
      disabled={isClicked}
    >
      {number}
    </button>
  );
};

export default NumberButton;
