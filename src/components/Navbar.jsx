import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Navbar extends Component {
  static propTypes = {title:PropTypes.string.isRequired }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {this.props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="/">
                  Home
                </a>
                <a className="nav-link" href="/about">About</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
