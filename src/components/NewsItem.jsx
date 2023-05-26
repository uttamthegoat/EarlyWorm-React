import React from "react";
import styles from "./styles/NewsItem.module.css";

export default function NewsItem(props) {
  const defaultUrl =
    "https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg";
  const { title, description, url, urlToImage, publishedAt, source } =
    props.news;
  let cardStyle = {
    backgroundColor: props.theme === "light" ? "#d0f0ff" : "#a8bcff54",
  };
  let cardTextStyle = {
    color: props.theme === "light" ? "black" : "white",
  };
  return (
    <article className={styles.card + " container"} style={cardStyle}>
      <header className={styles.card__thumb}>
        <img
          src={urlToImage ? urlToImage : defaultUrl}
          alt="urlToImage"
          style={{ width: "358px", height: "239px" }}
        />
      </header>
      <div className={styles.card__category}>
        <span className={styles.card__category__text + " text-capitalize"}>
          {props.category}
        </span>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__read}>
          <a target="_blank" rel="noreferrer" href={url ? url : "/"}>
            Read
          </a>
        </div>
        <h2
          className={styles.card__title}
          style={cardTextStyle}
        >
          {title ? title.slice(0, 40) + "..." : "Title"}
        </h2>
        <div className={styles.card__subtitle}>
          {source.name ? source.name : "Unknown"}
        </div>
        <p className={styles.card__description} style={cardTextStyle}>
          {description ? description.slice(0, 75) + "..." : "description"}
        </p>
      </div>
      <footer className={styles.card__footer + " mb-3"}>
        <span className={`${styles.icon} ${styles.ion_chatbox}`}></span>{" "}
        {new Date(publishedAt).toGMTString()}
      </footer>
    </article>
  );
}
