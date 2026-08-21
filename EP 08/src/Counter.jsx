import React, { useState } from 'react';
import styles from './App.module.css';

function Counter() {
    const [number, setNumber] = useState(0);

    const decrease = () => {
        setNumber (number - 1);
    }

    const increase = () => {
        setNumber (number + 1);
    }


    const reset = () => {
        setNumber (0);
    }

    return (
        <div className = {styles.counterContainer}>
            <p className = {styles.number}>{number}</p>
            <div className = {styles.buttonContainer}>
                <button className = {styles.buttonDecrease} onClick = {decrease}>Decrease</button>
                <button className = {styles.buttonIncrease} onClick = {increase}>Increase</button>
                <button className = {styles.buttonReset} onClick = {reset}>Reset</button>
            </div>
         

        </div>
    )
}

export default Counter