import React, { useState, useRef } from 'react';
import styles from './TimerCard.module.css';

export default function TimerCard() {

    const Ref = useRef(null)

    // const [progress, setProgress] = useState()

    const [timer, setTimer] = useState('00:00:00')

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
            // setProgress(parseInt((remainSecond / (totalSecond / 100)).toString().slice(0, 2)))
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = (totalSecond) => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + totalSecond);
        return deadline;
    }

    const handleClick = () => {
        let totalSecond = hour * 3600 + minute * 60 + second;
        clearTimer(getDeadTime(totalSecond));
    }

    return (
        <div className={styles.container}>
            <div className={styles.display_countdown}>
                <div className={styles.mid_circle} /*style={{ background: `conic-gradient(#FF6A6A ${progress}%, transparent ${progress}%)` }}*/>
                    <div className={styles.outer_circle}>
                        {timer}
                    </div>
                </div>
            </div>
            <div className={styles.set_countdown}>
                <div className={styles.set_number}>
                    <div className={styles.number}>
                        <p>Hours</p>
                        <button onClick={() => setHour(hour + 1)}>▲</button>
                        <span>{hour}</span>
                        <button onClick={() => hour > 0 && setHour(hour - 1)}>▼</button>
                    </div>:
                    <div className={styles.number}>
                        <p>Minuts</p>
                        <button onClick={() => setMinute(minute + 1)}>▲</button>
                        <span>{minute}</span>
                        <button onClick={() => minute > 0 && setMinute(minute - 1)}>▼</button>
                    </div>:
                    <div className={styles.number}>
                        <p>Seconds</p>
                        <button onClick={() => setSecond(second + 1)}>▲</button>
                        <span>{second}</span>
                        <button onClick={() => second > 0 && setSecond(second - 1)}>▼</button>
                    </div>
                </div>
                <button className={styles.start_btn} onClick={handleClick}>Start</button>
            </div>
        </div>
    )
}
