/** @format */

import React from "react";
import Styles from "./style.module.css";
function Tabs() {
  return (
    <React.Fragment>
      <button className={Styles.button}>
        <div className={Styles.texted}>Horror</div>
      </button>
    </React.Fragment>
  );
}
export default Tabs;
