import React, { useState } from 'react';
import styles from './RegisterForm.module.css'

export default function Input(props) {
  const [focused, setFocused] = useState(false); // for input to set error 

  const [maxNum, setMaxNum] = useState(''); // for mobile input to limit num 10
  const transferOnChange = props.onChange; // make expression to function
  function limitMobNum(e) {
    e.target.value.length < 11 && setMaxNum(e.target.value);
    transferOnChange(e);
  }

  return (
    props.type === 'number' ? (<div className={styles.input_box}>
      <input
        {...props}
        value={maxNum}
        onChange={limitMobNum}
        onBlur={()=>setFocused(true)}
        focused={focused.toString()}
      />
      <span className={props.error === 'true' && !focused ? styles.error : styles.span}>
        {props.errormessage}
      </span>
    </div>)
      : (<div className={styles.input_box}>
        <input
          {...props}
          onChange={props.onChange}
          onBlur={()=>setFocused(true)}
          focused={focused.toString()}
        />
        <span className={props.error === 'true' && !focused ? styles.error : styles.span}>
          {props.errormessage}
        </span>
      </div>
      )
  );
}
