import React from "react";
import styles from "./styles/ThemeButton.module.css";

export default function ThemeButton(props) {
  const changeColor = () => {
    if (props.theme === "light") {
      document.getElementById("checkbox_label").style.backgroundColor = "white";
      document.getElementById("ball").style.backgroundColor = "black";
    } else {
      document.getElementById("checkbox_label").style.backgroundColor = "black";
      document.getElementById("ball").style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onClick={changeColor}
        onChange={() => {
          props.handleTheme(props.theme);
        }}
      />
      <label
        htmlFor="checkbox"
        className={styles.checkbox_label}
        id="checkbox_label"
      >
        <span className={styles.ball} id="ball"></span>
      </label>
    </div>
  );
}
