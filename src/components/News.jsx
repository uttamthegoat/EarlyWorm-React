import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }

  capitalise = (word) => {
    return (
      "NewsMonkey - " +
      word.charAt(0).toUpperCase() +
      word.substring(1).toLowerCase()
    );
  };

  async apiCall() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b6d098ee98741628edd0fa4c2b04536&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let res = await fetch(url);
    let data = await res.json();
    this.setState(
      {
        articles: data.articles,
        totalResults: data.totalResults,
      },
      // () => console.log(this.state.articles)
    );
    document.title = this.capitalise(this.props.category);
  }

  componentDidMount() {
    this.apiCall();
    this.setState({
      page: this.state.page + 1,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.apiCall();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.apiCall();
  };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b6d098ee98741628edd0fa4c2b04536&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    this.setState(
      {
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
      },
      () => {
        // console.log(this.state.articles);
      }
    );
    this.setState({
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="my-3 text-center">
          Top Headlines {this.capitalise(this.props.category)}
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row g-0 w-100">
            {this.state.articles.map((element) => {
              return (
                <div
                  key={element.title}
                  className="col-lg-4"
                  style={{ padding: "10px", margin: "30px 0px" }}
                >
                  <NewsItem
                    news={element}
                    category={this.props.category}
                    theme={this.props.mode}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
