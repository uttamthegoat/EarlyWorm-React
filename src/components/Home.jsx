import React from 'react'
import Row from './home components/Row'

export default function Home(props) {
  return (
    <div className='home'>
        <div className='home__rows'>
          <Row pageSize={20} country="in" category="business"/>
          <Row pageSize={20} country="in" category="entertainment"/>
          <Row pageSize={20} country="in" category="general"/>
          <Row pageSize={20} country="in" category="health"/>
          <Row pageSize={20} country="in" category="science"/>
          <Row pageSize={20} country="in" category="sports"/>
          <Row pageSize={20} country="in" category="technology"/>
        </div>
    </div>
  )
}
// business
// entertainment
// general
// health
// science
// sports
// technology