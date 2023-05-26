// This is a page built using newsapi.org

import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  apiCall = async (url, pageNo) => {
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      page:pageNo,
      loading:false
    })
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe4249d9d26a427da447800fe502f7c0&page=${1}&pageSize=${this.props.pageSize}`;

    this.apiCall(url,1)
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fe4249d9d26a427da447800fe502f7c0&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    this.apiCall(url,this.state.page - 1)
  };
  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fe4249d9d26a427da447800fe502f7c0&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    
    this.apiCall(url,this.state.page + 1)
  };
  render() {
    return (
      <div className="container">
        <h1 className="my-3 text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="row w-100">
            {this.state.articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className="col-lg-4"
                  style={{ padding: "10px", margin: "30px 0px" }}
                >
                  <NewsItem news={element} category={this.props.category} theme={this.props.mode}/>
                </div>
              );
            })}
            <div className="container d-flex justify-content-between my-3 ">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &laquo; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &raquo;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
