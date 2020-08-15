/** @format */

import React from "react";
import Appbar from "../../components/app-bar";
import Styles from "./style.module.css";
import Card from "../../components/card";
function Home() {
  return (
    <React.Fragment>
      <Appbar />
      <div className={Styles.container}>
        <div className={Styles.faded}>
          <div className={Styles.grid1}>
            <div>
              <h1 className={Styles.title}>Narcos</h1>
            </div>
            <div>
              <button className={Styles.button}>Play</button>
              <button className={Styles.button}>My list</button>
            </div>
            <div>
              <h1 className={Styles.title2}>
                A gritty chronicle of the war against Colombia's infamously
                violent and powerful drug cartels.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.container2}>
        <h1>Netflix Original</h1>
        <div className={Styles.wrapper}>
          <Card /> <Card />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
