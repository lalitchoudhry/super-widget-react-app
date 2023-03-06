import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import NewsCard from '../../Component/NewsCard/NewsCard'
import ProfileCard from '../../Component/ProfileCard/ProfileCard'
import WeatherCard from '../../Component/WeatherCard/WeatherCard'
import NoteCard from '../../Component/NoteCard/NoteCard'
import TimerCard from '../../Component/TimerCard/TimerCard'

export default function Home() {


  const [time, setTime] = useState('')

  useEffect(() => {

    const getTime = () => {
      const time = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),

        hour: new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
      }
      setTime(time)
    }
    getTime();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.profile_3_box}>
        <div className={styles.profile_weather_box}>
          <ProfileCard />
          <WeatherCard time={time} />
        </div>
        <NoteCard />
        <TimerCard />
      </div>
      <NewsCard time={time} />
    </div>
  )
}