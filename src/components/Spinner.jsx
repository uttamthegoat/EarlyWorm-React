import React from 'react'
import loading from './images/loading.gif'
import styles from './styles/Spinner.module.css'

export default function Spinner (){
    return (
      <div className={styles.loaderbox}>
        <img src={loading} alt="loading" />
      </div>
    )   
  }

