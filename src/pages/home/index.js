/** @format */

import React, { useState, useEffect } from "react";
import Appbar from "../../components/app-bar";
import Styles from "./style.module.css";
import Card from "../../components/card";
import CardPopular from "../../components/card-popular";
import Tabs from "../../components/Tabs";
import { getMovie, getListMovie, getCategories } from "../../services/api";
function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      const res = await getMovie();
      const film = await getListMovie();
      // const cat = await getCategories();
      setData(res.Search);
      setData2(film.Search);
      // setCategories(cat);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  console.log(categories);

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
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={Styles.container2}>
            <h1>Netflix Original</h1>
            <div className={Styles.wrapper}>
              {data.map((item) => (
                <Card data={item} />
              ))}
            </div>
          </div>
          <div className={Styles.container2}>
            <h1>Netflix Popular</h1>
            <div className={Styles.wrapper}>
              {data2.map((item) => (
                <CardPopular data={item} />
              ))}
            </div>
          </div>
          <div className={Styles.container2}>
            <h1>Category</h1>
            <div className={Styles.wrapper}>
              <Tabs />
              <Tabs />
              <Tabs />
              <Tabs />
              <Tabs />
            </div>
            <div className={Styles.wrapper2}>
              {data.map((item) => (
                <Card data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
export default Home;
