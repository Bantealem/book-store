/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Categories.module.css";
import { checkStatus } from "../../redux/categories/categories";

const Categories = () => {
  const symbol = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const status = () => {
    dispatch(checkStatus());
  };
  <div className={styles["categories-container"]}>
    <button type="submit" onClick={status}>
      Check status
    </button>
    <h4>{symbol}</h4>
  </div>;
};

export default Categories;
