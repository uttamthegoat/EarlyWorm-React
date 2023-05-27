import React, { Component } from "react";
import Spinner from "../Spinner";

export default class Rows extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe4249d9d26a427da447800fe502f7c0&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      articles: data.articles,
      loading: false,
    });
  }
  render() {
    const defaultUrl =
    "https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg";
    return (
      <div>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="mt-5">
            <h1 className="text-capitalize rows__category__name">
              {this.props.category}
            </h1>
            <div className="row__posters">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="card mb-3 row__posters__block"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title" style={{ whiteSpace: "pre-line" }}>
                            {element.title
                              ? element.title.slice(0, 30) + "..."
                              : ""}
                          </h5>
                          <p
                            className="card-text"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {element.description
                              ? element.description.slice(0, 127)+"..."
                              : ""}
                          </p>
                          <p className="card-text">
                            <a
                              href={element.url}
                              className="btn btn-outline-dark"
                            >
                              Read
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6" style={{ padding: "5px" }}>
                        <img
                          src={element.urlToImage?element.urlToImage:defaultUrl}
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
}
