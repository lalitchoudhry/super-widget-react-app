import React, { useEffect, useState } from 'react';
import styles from './WeatherCard.module.css';
import local from '../../config';

export default function WeatherCard(props) {

    const [weather, setWeather] = useState()

    useEffect(() => {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=balaghat&units=metric&appid=${local.weatherKey}`;

        const fetchWeather = async () => {
            const res = await fetch(url).then(async (data) => await data.json())

            setWeather(res);
        }
        fetchWeather();

    }, [])
    console.log(weather)

    return (
        <div className={styles.container}>
            <div className={styles.date_box}>
                <div>{props.time.month}-{props.time.date}-{props.time.year}</div>
                <div>{props.time.hour}</div>
            </div>
            <div className={styles.weather_box}>
                <div className={styles.info_box}>
                    <img src={`http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`} alt="icon" />
                    <div className={styles.info}>{weather && weather.weather[0].description}</div>
                </div>|
                <div className={styles.info_box}>
                    <h1>{weather && weather.main.temp}°C</h1>
                    <div className={styles.info}>
                        <i className="bi bi-thermometer-half"></i>
                        <p>{weather && weather.main.pressure} mbar <br />pressure</p>
                    </div>
                </div>|
                <div className={styles.info_box}>
                    <div className={styles.info}>
                        <i className="bi bi-wind"></i>
                        <p>{weather && weather.wind.speed} km/h <br />wind</p>
                    </div>
                    <div className={styles.info}>
                        <i className="bi bi-droplet-half"></i>
                        <p>{weather && weather.main.humidity}% <br />humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}