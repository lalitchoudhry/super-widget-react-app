import React, {useState} from 'react';
import SelectedCategory from './../SelectedCategory/SelectedCategory'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {
    const userDetail = {
        name: JSON.parse(localStorage.getItem('userDetail')).name,
        userName: JSON.parse(localStorage.getItem('userDetail')).username,
        email: JSON.parse(localStorage.getItem('userDetail')).email
    }

    const [category, setCategory] = useState(JSON.parse(localStorage.getItem('selectedCategory')))

    const selectCategory = (type)=>{

        if (category.length === 1) {
            console.log('error')
        } else {
            setCategory(
                category.filter(e =>
                    e.type !== type
            ))
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.profile_box} >

        </div>
        <div className={styles.detail_box}>
            <div className={styles.name_box} >
                <div className={styles.name}>{userDetail.name}</div>
                <div className={styles.email}>{userDetail.email}</div>
                <div className={styles.username}>{userDetail.userName}</div>
            </div>
            <div className={styles.category} >
                {category.map((e)=>
                    <SelectedCategory key={e.id} type={e.type} selectCategory={selectCategory}/>
                )}
            </div>
        </div>
    </div>
  )
}
