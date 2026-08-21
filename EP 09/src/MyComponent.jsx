// onChange = Trigger a function when the value of the input changes

import React, { useState } from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
    // S3: Initialize variable 
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");

    // S3: Create function
    // function not const
    function handleNameChange(event){ // event = the event when the input changes
        setName (event.target.value); // (event.target.value) = the value of the input field. (The instant change what user type in the input field)
    }

    function handleQuantityChange(event){
        setQuantity (event.target.value);
    }

    function handleCommentChange(event){
        setComment (event.target.value);
    }

    return (
        <>

            {/* S1: What u want to see first [input field] */}
            <input className = {styles.input} value = {name} onChange = {handleNameChange}></input>
            <p className = {styles.output}> Name: {name}</p>

            <input className = {styles.input} value = {quantity} onChange = {handleQuantityChange} type = "number"></input>
            <p className = {styles.output}> Quantity: {quantity}</p>

            <textarea className = {styles.input} value = {comment} onChange = {handleCommentChange} placeholder="Enter delivery instructions..."></textarea>
            <p className = {styles.output}> Comment: {comment}</p>
        </>
    );
}

export default MyComponent;

// YouTube until 2:05:55