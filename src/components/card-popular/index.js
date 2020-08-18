/** @format */

import React from "react";
import Styles from "./style.module.css";
function Cardpopular(props) {
  const { data } = props;
  return (
    <div className={Styles.card}>
      <img src={data.Poster} alt="" className={Styles.carded} />
    </div>
  );
}
export default Cardpopular;
