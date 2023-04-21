import React, { useState } from 'react'
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text" 
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />

                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age"
                    type="text"
                    value={enteredAge}
                    onChange={ageChangeHandler} 
                />

                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;