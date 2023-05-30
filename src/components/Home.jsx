import React from 'react'
import Row from './home components/Row'

export default function Home(props) {
  return (
    <div className='home'>
        <div className='home__rows'>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="business"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="entertainment"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="general"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="health"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="science"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="sports"/>
          <Row apiKey={props.apiKey} setProgress={props.setProgress} pageSize={20} country="in" category="technology"/>
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