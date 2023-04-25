import React from 'react'
import './Home.css'
import GridTab from './GridTab'

function Home() {
  return (
    <div className="music-player">
        <div className="grid">
        <GridTab/>
        <GridTab/>
        <GridTab/>
        <GridTab/>
        <GridTab/>
        <GridTab/>
        <GridTab/>
        <GridTab/>
            
        </div>
    </div>

  )
}

export default Home