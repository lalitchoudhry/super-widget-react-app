import React from 'react';
import styles from './Category.module.css';
import categoryChips from '../../Component/CategoryChips/CategoryChipsData';
import CategoryChips from '../../Component/CategoryChips/CategoryChips';
import SelectedCategory from '../../Component/SelectedCategory/SelectedCategory';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let nextId = 0;

export default function Category() {

    const navigate = useNavigate();

    const [seltedCategory, setSeltedCategory] = useState([]);
    const [chips, setChips] = useState(categoryChips);

    function isPresent(type) {
        for (const value in seltedCategory) {
            if (seltedCategory[value].type === type) {
                console.log("Enter click")
                return true;
            }
        }
        return false;
    }

    function selectCategory(type) {

        if (isPresent(type)) {
            setSeltedCategory(
                seltedCategory.filter(e =>
                    e.type !== type
                )
            )
        } else {
            
            setSeltedCategory([...seltedCategory, { id: nextId++, type: type }])
        }
        setChips(
            chips.map((chip) =>
              chip.type === type
                ? { ...chip, selected: !chip.selected }
                : chip
            )
          );
    }

    function onClickNext(){
        let selectedCategoty = seltedCategory.map((e)=>e)

        if (selectedCategoty.length === 0) {
            alert('Please Select any Category')
            return
        }
        localStorage.setItem('selectedCategory', JSON.stringify(selectedCategoty))
        navigate('/home');
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.text_box}>
                <div className={styles.text}>
                    <h2>super app</h2>
                    <p>Choose your entertainment category</p>
                </div>
                <div className={styles.selted_box}>
                    {seltedCategory != null && seltedCategory.map((category) =>
                        <SelectedCategory key={category.id} type={category.type} selectCategory={selectCategory}/>
                    )}
                </div>
            </div>
            <div className={styles.category_box}>
                {chips.map((chip) => 
                    <CategoryChips 
                        key={chip.id} 
                        {...chip} 
                        selectCategory={selectCategory}
                    />)}
            </div>
            <button 
                className={styles.next_btn} 
                onClick={onClickNext}>
                    Next
            </button>
        </div>
    )
}
