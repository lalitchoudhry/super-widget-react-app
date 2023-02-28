import React from 'react';
import styles from './Category.module.css';
import categoryChips from '../../Component/CategoryChips/CategoryChipsData';
import CategoryChips from '../../Component/CategoryChips/CategoryChips';
import SelectedCategory from '../../Component/SelectedCategory/SelectedCategory';
import { useState } from 'react';

let nextId = 0;

export default function Category() {

    const [seltedCategory, setSeltedCategory] = useState([]);

    function isPresent(type) {
        for (const value in seltedCategory) {
            if (seltedCategory[value].type === type) {
                console.log("Enter click")
                return true;
            }
        }
        console.log('end')
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
    }
    console.log(seltedCategory);

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
                {categoryChips.map((chip) => <CategoryChips key={chip.id} {...chip} selectCategory={selectCategory} />)}
            </div>
        </div>
    )
}
