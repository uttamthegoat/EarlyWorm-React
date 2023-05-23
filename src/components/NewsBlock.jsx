// This is a page built using newsapi.org

import React, { Component } from "react";
import NewsCard from "./NewsCard";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=c10daa9425e3481688f5d493f8c810ac"
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        this.setState({articles:data.articles})
        console.log(this.state.articles);
      })
      .catch(err=>console.log("error"));
  }
  handlePrevClick = async () => {
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c10daa9425e3481688f5d493f8c810ac&page=${
    //     this.state.page - 1
    //   }`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState = {
    //     articles: parsedData.articles,
    //     page: this.state.page - 1,
    //   };
  };
  handleNextClick = async () => {
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c10daa9425e3481688f5d493f8c810ac&page=${
    //     this.state.page + 1
    //   }`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState = {
    //     articles: parsedData.articles,
    //     page: this.state.page + 1,
    //   };
  };
  render() {
    return (
      <div className="container">
        <h1 className="container my-3">Top Headlines</h1>
        <div className="row w-100">{this.state.articles.map(element=>{
          return (
            <div key={element.url} className="col-md-4 my-3">
              <NewsCard news={element}/>
            </div>
          )
        })}</div>
        <div className="container d-flex justify-content-between my-3 ">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button className="btn btn-dark" onClick={this.handleNextClick}>
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
