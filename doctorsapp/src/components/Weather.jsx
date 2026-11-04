import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Weather() {
    let [weather,setWeather]=useState([])
    let [city,setCity]=useState('')
  return (
    <div>
        <h1>Weather app</h1>
        <form action="">
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter city name" />
            <button type="submit" >search</button>
        </form>
    </div>
  )
}

export default Weather