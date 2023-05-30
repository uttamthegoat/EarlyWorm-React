import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function Rows(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiCall = async () => {
    props.setProgress(10);
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${1}&pageSize=${
      props.pageSize
    }`;

    props.setProgress(40);
    let res = await fetch(url);
    let data = await res.json();
    setArticles(data.articles);
    props.setProgress(100);
    setLoading(false);
    document.title = "NewsMonkey - Home";
  };
  useEffect(() => {
    apiCall();
  }, []);

  const defaultUrl =
    "https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg";
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <div className="my-5">
          <h1 className="text-capitalize rows__category__name">
            {props.category}
          </h1>
          <div className="row__posters border border-2">
            {articles.map((element) => {
              return (
                <div
                  className="card mb-3 row__posters__block"
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {element.title
                            ? element.title.slice(0, 30) + "..."
                            : "Breaking Newa"}
                        </h5>
                        <p
                          className="card-text"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {element.description
                            ? element.description.slice(0, 97) + "..."
                            : ""}
                        </p>
                        <p className="card-text">
                          <a
                            href={element.url ? element.url : "/"}
                            className="btn btn-outline-dark"
                          >
                            Read
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6" style={{ padding: "5px" }}>
                      <img
                        src={
                          element.urlToImage ? element.urlToImage : defaultUrl
                        }
                        className="rounded"
                        alt="imageUrl"
                        width="258"
                        height="240"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
