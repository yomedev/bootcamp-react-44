import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

export const Button = ({ children, primary, secondary }) => {
  return (
    // <button type="button" className={`${styles.btn} ${primary && styles.primary} ${secondary && styles.secondary}`}>
    <button
      type="button"
      className={classNames(styles.btn, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
      })}
    >
      {children}
    </button>
  );
};
