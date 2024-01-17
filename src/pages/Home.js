import React from 'react'
import headshot from "./HairyDawg.jpg"
import "./Home.css"
const Home = () => {
  return (
    <div className = "home">
      <h1>About Me</h1>
      <h2>Hairy Dawg</h2>
      <p>
        Hairy Dawg is the costumed mascot of the University of Georgia Bulldogs. Hairy Dawg made his first appearance at the 1981 Sugar Bowl and has been an official mascot of UGA since. Hairy Dawg attends all Georgia Bulldogs football games and most home athletic events.
      </p>
      <img className = "dawgImage" src={headshot} alt="Hairy Dawg" width="400" height="400" />
    </div>
  )
}

export default Home