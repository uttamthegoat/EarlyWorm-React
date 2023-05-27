import React from 'react'
import Rows from './home components/Rows'

export default function Home(props) {
  return (
    <div className='home'>
        <div className='home__rows'>
          <Rows pageSize={20} country="in" category="business"/>
          <Rows pageSize={20} country="in" category="entertainment"/>
          <Rows pageSize={20} country="in" category="general"/>
          <Rows pageSize={20} country="in" category="health"/>
          <Rows pageSize={20} country="in" category="science"/>
          <Rows pageSize={20} country="in" category="sports"/>
          <Rows pageSize={20} country="in" category="technology"/>
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