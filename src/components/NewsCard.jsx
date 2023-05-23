import React, { Component } from "react";

export default class NewsItem extends Component {
    defaultUrl="https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg"
  render() {
    const { title,description,url,urlToImage } = this.props.news
    return (
      <div className="container my-3 p-4">
        <div className="card">
          <img
            src={urlToImage?urlToImage:this.defaultUrl}
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
              {description?description.slice(0, 75) + "...":"description"}
            </p>
            <a href={url?url:"/"} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
