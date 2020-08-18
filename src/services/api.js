/** @format */

import axios from "axios";

export const getMovie = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}&s=avengers`
  );
  return response.data;
};
export const getListMovie = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}&s=extraction&y=2020`
  );
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${process.env.REACT_APP_CATEGORY_URL}`);
  return response.data;
};
