import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalise = (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  };

  const apiCall = async () => {
    props.setProgress(10);
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    props.setProgress(40);
    let res = await fetch(url);
    let data = await res.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    props.setProgress(100);
    setLoading(false);
    document.title = "EarlyWorm - " + capitalise(props.category);
  };

  useEffect(() => {
    apiCall();
    setPage(page + 1);
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    apiCall();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    apiCall();
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    let res = await fetch(url);
    let data = await res.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setPage(page + 1);
  };
  return (
    <div className="container">
      <h1 className="my-3 text-center">
        EarlyWorm - Top {capitalise(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row g-0 w-100">
          {!loading &&
            articles.map((element, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4"
                  style={{ padding: "10px", margin: "30px 0px" }}
                >
                  <NewsItem
                    news={element}
                    category={props.category}
                    theme={props.mode}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
