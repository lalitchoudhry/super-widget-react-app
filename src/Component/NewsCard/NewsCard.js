import React, { useState, useEffect } from 'react';
import styles from './NewsCard.module.css';
import config from './../../config'

export default function NewsCard(props) {

  const [news, setNews] = useState()

  useEffect(() => {

    const url = `https://newsapi.org/v2/everything?q=anime&apiKey=${config.newsKey}`
    const fetchNews = async () => {
      const res = await fetch(url).then(async (data) => await data.json()).catch((error)=>console.error(error))
      if (res.status === 'ok') {
        setNews(res);
      }
    }

    fetchNews();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.img_box} style={{ backgroundImage: `url("${news && news.articles[10].urlToImage}")` }}>
        <div className={styles.title_box}>
          <h2>{news && news.articles[10].title}</h2>
          <div className={styles.date_box}>{props.time.month}-{props.time.date}-{props.time.year} | {props.time.hour}
          </div>
        </div>
      </div>
      <p>{news && news.articles[10].description}</p>
    </div>
  )
}
