import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="container my-3 p-4">
        <div className="card">
          <img
            src={this.props.news.image?this.props.news.image.thumbnail.contentUrl:"https://timesofindia.indiatimes.com/thumb/msid-99416197,width-1200,height-900,resizemode-4/99416197.jpg"}
            className="card-img-top image-fluid"
            alt="..."
            width={358}
            height={195}
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.news.name.slice(0, 50) + "..."}
            </h5>
            <p className="card-text">
              {this.props.news.description.slice(0, 75) + "..."}
            </p>
            <a href={this.props.news.url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}