import React from "react";
import styles from "./styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const bgColor = {
    backgroundColor: props.theme === "light" ? "#ededed" : "black",
  };
  const textColor = {
    color: props.theme === "light" ? "black" : "white",
  };
  return (
    <div
      className={styles.footer + " row g-0 w-100 text-center"}
      style={bgColor}
    >
      <div className={styles.footer1 + " col-sm-6"}>
        <h4 className="mb-3" style={textColor}>
          Website Info
        </h4>
        <ul className={styles.footer1__list}>
          <li className={styles.footer1__lists}>
            <Link to="/about" style={textColor}>
              About
            </Link>
          </li>
          <li className={styles.footer1__lists}>
            <a href="#" style={textColor}>
              Terms of Use
            </a>
          </li>
          <li className={styles.footer1__lists}>
            <a href="#" style={textColor}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer1 + " col-sm-6"}>
        <h4 className="mb-3" style={textColor}>
          Contact Us:{" "}
        </h4>
        <ul>
          <li className={styles.footer1__lists}>
            <a href="tel:+91 8618555625" style={textColor}>
              <i className="fa-solid fa-phone fa-shake"></i>tel:+91 8618555625
            </a>
          </li>
          <li className={styles.footer1__lists}>
            <a href="mailto:19516uttam@gmail.com" style={textColor}>
              <i className="fa-solid fa-envelope fa-shake"></i>19516uttam@gmail.com
            </a>
          </li>
          <li className={styles.footer1__lists}>
            <a href="#" style={textColor}>
              <i className="fa-solid fa-hashtag fa-beat"></i>Social Media
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
