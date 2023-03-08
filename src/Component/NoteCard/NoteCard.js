import React, {useState, useEffect} from 'react';
import styles from './NoteCard.module.css';

export default function NoteCard() {

    const [note, setNote] = useState('')

    const handleChange = (event)=>{

        let noteData = event.target.value;
        setNote(noteData)
    }

    useEffect(() => {
        const savedNote = JSON.parse(localStorage.getItem('rect-noteData'));
        if (savedNote) {
            setNote(savedNote);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('rect-noteData', JSON.stringify(note))

    }, [note])

    useEffect(() => {
        const savedNote = JSON.parse(localStorage.getItem('rect-noteData'));
        if (savedNote) {
            setNote(savedNote);
        }
    }, [])
    
  return (
    <div className={styles.container}>
        <h1>All notes</h1>
        <textarea value={note} onChange={handleChange} />
        <div className={styles.button}><button><i className="bi bi-pencil"></i></button></div>
    </div>
  )
}
