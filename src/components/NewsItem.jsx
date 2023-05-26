import React from "react";
import styles from "./NewsItem.module.css";

export default function NewsItem(props) {
  const defaultUrl =
    "https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg";
  const { title, description, url, urlToImage, publishedAt, source } =
    props.news;
  return (
    <article className={styles.card+" container"}>
      <header className={styles.card__thumb}>
        <img
          src={urlToImage ? urlToImage : defaultUrl}
          alt="urlToImage"
          style={{width:"358px",height:"239px"}}
        />
      </header>
      <div className={styles.card__date}>
        <span className={styles.card__date__day+" text-capitalize"}>{props.category}</span>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__category}>
          <a target="_blank" rel="noreferrer" href={url? url : "/"}>Read</a>
        </div>
        <h2 className={styles.card__title}>
          <p>{title?title.slice(0, 40) + "...":"Title"}</p>
        </h2>
        <div className={styles.card__subtitle}>
          {source.name ? source.name : "Unknown"}
        </div>
        <p className={styles.card__description}>{description ? description.slice(0, 75) + "..." : "description"}</p>
      </div>
      <footer className={styles.card__footer+" mb-3"}>
        <span className={`${styles.icon} ${styles.ion_chatbox}`}></span> {new Date(publishedAt).toGMTString()}
      </footer>
    </article>
  );
}
