import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props.news;
    return (
      <div className="container my-3 p-4">
        <div className="card">
          <img
            src={urlToImage?urlToImage:"#"}
            className="card-img-top image-fluid"
            alt="..."
            width={358}
            height={195}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title?title.slice(0, 50) + "...":"title"}
            </h5>
            <p className="card-text">
              {description?description.slice(0, 75) + "...":"content"}
            </p>
            <a href={url?url:"/"} /*target="_blank"*/ className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}