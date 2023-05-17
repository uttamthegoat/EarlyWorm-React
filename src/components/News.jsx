import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=c10daa9425e3481688f5d493f8c810ac"
    let data= await fetch(url)
    let parsedData=await data.json()
    // console.log(parsedData.articles);
    this.setState(
      {
        articles:parsedData.articles
      }
    )
  }
  render() {
    return (
      <div className="container">
        <h1 className="container my-3">News Type</h1>
        <div className="row w-100">
          {this.state.articles.map(element => {
            return (
              <div key={element.url} className="col-lg-4 my-2">
                <NewsItem news={element} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
