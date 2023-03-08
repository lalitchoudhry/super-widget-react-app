import React, { useState, useEffect } from 'react';
import styles from './BrowseEntertainment.module.css';
import config from './../../config';
import MovieCard from '../../Component/MovieCard/MovieCard';
import { useNavigate } from 'react-router-dom';

export default function BrowseEntertainment() {

  const navigate = useNavigate()

  const [animation, setAnimation] = useState()
  const [horror, setHorror] = useState()
  const [action, setAction] = useState()

  const toggleHome = ()=>{
    navigate('/home')
  }

  useEffect(() => {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.movieKey}&language=en-US`
    const fetchMovies = async () => {

      const animeRes = await fetch(`${url}&with_genres=16`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (animeRes.page > 0) {
        
          setAnimation(animeRes);
        }


      const horrorRes = await fetch(`${url}&with_genres=27`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (horrorRes.page>0) {
          
          setHorror(horrorRes);
        }

      const actionRes = await fetch(`${url}&with_genres=28`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (actionRes.page>0) {
          
          setAction(actionRes);
        }
    }
    fetchMovies();
  }, [])

  return (
    <div className={styles.container}>
      <h3>Super app</h3>
      <button className={styles.toggle_btn} onClick={toggleHome}></button>
      <div className={styles.movies_container}>
        <p>Entertainment according to your choice</p>
        <div className={styles.category_box}>
          <h1>Animation</h1>
          <div className={styles.movies_box}>
            {animation && animation.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
        <div className={styles.category_box}>
          <h1>Horror</h1>
          <div className={styles.movies_box}>
            {horror && horror.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
        <div className={styles.category_box}>
          <h1>Action</h1>
          <div className={styles.movies_box}>
            {action && action.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
