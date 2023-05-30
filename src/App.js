import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Redirect from "./components/Redirect";

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
  const apiKey=process.env.REACT_APP_NEWS_API
  const pageInfo = {
    pageSize: 9,
    country: "in",
  };
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <Navbar title="EarlyWorm" theme={theme} toggleMode={toggleMode} />
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home apiKey={apiKey} setProgress={setProgress} theme={theme} />}
        />
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
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
              apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageInfo.pageSize}
              country={pageInfo.country}
              category="technology"
              mode={theme}
            />
          }
        />
        <Route exact path="/about" element={<About setProgress={setProgress} theme={theme} />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      {/* <Footer theme={theme}/> */}
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
