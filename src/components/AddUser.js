import classes from './AddUser.module.css';
import Button from './Button';
import Card from './Card';
import { useState, useRef } from 'react';
import ErrorModal from './ErrorModal';
import { Fragment } from 'react';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
            
    const[error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({title: 'Invalid input',
        message: 'please enter a valid name and age(non-empty values)'});
            return;
        }
        if(+enteredAge < 1){
            setError({title: 'Invalid input',
        message: 'please enter a valid age(> 0)'});
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // useRef hook is used to create a reference to the input element. 
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        // Fragment acts as a wrapper but it doesn't introduce an extra DOM node.
        <Fragment>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='userName'>Username</label>
                <input type="text" id="userName"
                    ref={nameInputRef}/>
                <label htmlFor='userAge'>Age(Years)</label>
                <input type="number" id="userAge"
                    ref={ageInputRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Fragment>
    )

}

export default AddUser;