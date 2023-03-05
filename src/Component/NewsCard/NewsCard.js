import React, { useState, useEffect } from 'react';
import styles from './NewsCard.module.css';

export default function NewsCard(props) {

  const [news, setNews] = useState()

  useEffect(() => {

    const url = 'https://newsapi.org/v2/everything?q=anime&apiKey=cc6120b1af3c44499c9ddd6e1d45d074'
    const fetchNews = async () => {
      const res = await fetch(url).then(async (data) => await data.json())
      setNews(res);
    }

    fetchNews();
  }, [])
  console.log(news);

  return (
    <div className={styles.container}>
      <div className={styles.img_box} style={{ backgroundImage: `url("${news && news.articles[0].urlToImage}")` }}>
        <div className={styles.title_box}>
          <h2>{news && news.articles[0].title}</h2>
          <div className={styles.date_box}>{props.time.month}-{props.time.date}-{props.time.year} | {props.time.hour}
          </div>
        </div>
      </div>
      <p>{news && news.articles[0].description}</p>
    </div>
  )
}
