/** @format */

import React from "react";
import Styles from "./style.module.css";
function Card() {
  return (
    <div>
      <img
        src="https://image.tmdb.org/t/p/original//wCQP1El20FFncM0lIYcaW3Kq19o.jpg"
        alt=""
        className={Styles.card}
      />
    </div>
  );
}
export default Card;
