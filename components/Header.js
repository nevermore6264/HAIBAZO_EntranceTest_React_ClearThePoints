import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.marquee}>
        <p>
          Bài Entry Test: Trò chơi với các nút số - Công nghệ sử dụng: ReactJS,
          CSS Modules.
        </p>
      </div>
    </div>
  );
};

export default Header;
