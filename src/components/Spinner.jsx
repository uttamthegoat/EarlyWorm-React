import React, { Component } from 'react'
import loading from './images/loading.gif'
import styles from './styles/Spinner.module.css'

export default class Spinner extends Component {
  render() {
    return (
      <div className={styles.loaderbox}>
        <img src={loading} alt="loading" />
      </div>
    )   
  }
}
