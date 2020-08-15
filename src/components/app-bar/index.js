/** @format */

import React from "react";
import Styles from "./style.module.css";
import Search from "../../assets/icons/search";
function Appbar() {
  return (
    <React.Fragment>
      <nav className={Styles.nav}>
        <div className={Styles.div}>
          <div className={Styles.menu}>
            <img
              src="http://netflix-react-clone.surge.sh/8562b6565f5ae1db5e4af40d85b4ed2d.png"
              alt=""
              className={Styles.Appbar}
            />
            <h1>Home</h1>
            <h1>TV show</h1>
            <h1>Movies</h1>
            <h1>Recently Added</h1>
            <h1>My list</h1>
          </div>

          <Search />
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Appbar;
