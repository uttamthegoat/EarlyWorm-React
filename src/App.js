import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  c="goat"
  render() {
    return (
      <div className='App'>
        <Navbar title="NewsMonkey"/>
        <News/>
      </div>
    )
  }
}