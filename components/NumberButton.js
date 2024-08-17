import React, { useState } from "react";
import styles from "../styles/NumberButton.module.css";

const NumberButton = ({ number, position, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick(number);
    }, 300);
  };

  return (
    <button
      className={`${styles.numberButton} ${isClicked ? styles.active : ""}`}
      style={position} // Sử dụng vị trí truyền vào từ props
      onClick={handleClick}
      disabled={isClicked}
    >
      {number}
    </button>
  );
};

export default NumberButton;
