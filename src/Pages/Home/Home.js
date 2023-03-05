import React from 'react'
import ProfileCard from '../../Component/ProfileCard/ProfileCard'
import WeatherCard from '../../Component/WeatherCard/WeatherCard'

export default function Home() {
  return (
    <div style={{color:'white'}}>
        <ProfileCard />
        <WeatherCard />
    </div>
  )
}