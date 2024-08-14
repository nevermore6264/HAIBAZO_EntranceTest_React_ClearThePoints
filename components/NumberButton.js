import React, { useState } from "react";
import styles from "../styles/NumberButton.module.css";

const NumberButton = ({ number, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick(number);
    }, 500); // Delay để cho phép animation chạy trước khi số biến mất
  };

  const randomPosition = {
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
  };

  return (
    <button
      className={`${styles.numberButton} ${isClicked ? styles.active : ""}`}
      style={{
        ...randomPosition,
        visibility: isClicked ? "hidden" : "visible",
      }}
      onClick={handleClick}
      disabled={isClicked} // Ngăn không cho người dùng click nhiều lần vào cùng 1 số
    >
      {number}
    </button>
  );
};

export default NumberButton;
