import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBlock from "./components/News";
import About from './components/About'
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
    }
  };
  const [page, setPage] = useState({
    pageSize: 6,
    country: "in",
  });
  return (
    <div className="App">
      <Navbar title="NewsMonkey" mode={theme} toggleMode={toggleMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <NewsBlock
              key="general"
              pageSize={page.pageSize}
              country={page.country}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <NewsBlock
              key="business"
              pageSize={page.pageSize}
              country={page.country}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <NewsBlock
              key="entertainment"
              pageSize={page.pageSize}
              country={page.country}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <NewsBlock
              key="general"
              pageSize={page.pageSize}
              country={page.country}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <NewsBlock
              key="health"
              pageSize={page.pageSize}
              country={page.country}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <NewsBlock
              key="science"
              pageSize={page.pageSize}
              country={page.country}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <NewsBlock
              key="sports"
              pageSize={page.pageSize}
              country={page.country}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <NewsBlock
              key="technology"
              pageSize={page.pageSize}
              country={page.country}
              category="technology"
            />
          }
        />
        <Route exact path="/about" element={<About/>} />
        <Route path="*" element={<Redirect />} />
      </Routes>
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
