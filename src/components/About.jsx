import React, { useEffect } from "react";
import profilepic from "./images/botaniz_uttam.jpeg";

export default function About (props) {
  let linkStyle = {
    color: props.theme === "light" ? "black" : "white",
    textDecoration: "none",
  };
  useEffect(() => {
    props.setProgress(10)
    setTimeout(() => {
      props.setProgress(100)
    }, 1000);
  }, [])
    return (
      <div className="container">
        <h1 className="text-center my-4">About</h1>
        <div className="about__intro my-4">
          <p className="fs-5">
            NewsMonkey is a news app. It is a React.js project developed using
            api from newsapi.org. It is a project developed during the initial
            day of me learning React.js. It gives current affairs of India.
            Based on the many categories like Business, Entertainment, General,
            Health, Science, Sports, Technology and many more.
          </p>
        </div>
        <div className="about__profile">
          <img
            src={profilepic}
            alt="myPic"
            width={200}
            className="mx-auto d-block rounded-4 about__profilepic"
          />
          <h1
            className={`text-${
              props.theme === "light" ? "muted" : "light"
            } text-center`}
          >
            Uttam
          </h1>
          <div
            className="text-center border border-2 border-primary mx-auto"
            style={{ width: "111px" }}
          ></div>
          <p className="fs-5">
            I am a student currently pursuing Computer Science & Engineering at{" "}
            <a href="https://mite.ac.in/" style={linkStyle}>
              Mangalore Institute of Technology and Engineering, Moodbidri
            </a>
            . I aspire to become a good developer.
          </p>
        </div>
      </div>
    );
  }
