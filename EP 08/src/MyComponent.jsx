import React, { useState } from 'react';
import styles from './App.module.css';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName ("Cynthia");
    }

    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge (age + 1);
    }

    const clearAge = () => {
        setAge (0);
    }

    const [isEmployed, setIsEmployed] = useState(false);

    const changeStatus = () => {
        setIsEmployed (!isEmployed);
    }


    return (
        <div className = {styles.background}>
        <p className = {styles.name}>Name: {name}</p>
            <button className = {styles.buttonUpdateName} onClick = {updateName}> Update Name </button>
            

            <p className = {styles.age}>Age: {age}</p>
            <div className = {styles.buttonContainer}>
                <button className = {styles.buttonUpdateAge} onClick = {updateAge}> Update Age </button>
                <button className = {styles.buttonClearAge} onClick = {clearAge}> Clear Age</button>
            </div>

            <p className = {styles.isEmployed}>Is employed?: {isEmployed ? "Yes" : "No"}</p>
            <button className = {styles.buttonUpdateAge} onClick = {changeStatus}> Change Status </button>
            

            {age >= 65 && <p> You are old </p>} 
        </div>
    )
}

export default MyComponent