import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Redirect from "./components/Redirect";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#16213E";
      document.body.style.color = "#fff";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000";
    }
  };
  const [pageInfo, setPageInfo] = useState({
    pageSize: 3,
    country: "in",
  });
  return (
    <div className="App">
      <Navbar title="NewsMonkey" theme={theme} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<Home theme={theme} />} />
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="business"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="entertainment"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              key="general"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="general"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              key="health"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="health"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              key="science"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="science"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              key="sports"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="sports"
              mode={theme}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="technology"
              mode={theme}
            />
          }
        />
        <Route exact path="/about" element={<About theme={theme}/>} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      <Footer theme={theme}/>
    </div>
  );
}

// business
// entertainment
// general
// health
// science
// sports
// technology