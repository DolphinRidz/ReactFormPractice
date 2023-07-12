import classes from './AddUser.module.css';
import Button from './Button';
import Card from './Card';
import { useState } from 'react';
import ErrorModal from './ErrorModal';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [ageEntered, setAgeEntered] = useState('');
    const[error, setError] = useState();
    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAgeEntered(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || ageEntered.trim().length ===0){
            setError({title: 'Invalid input',
        message: 'please enter a valid name and age(non-empty values)'});
            return;
        }
        if(+ageEntered < 1){
            setError({title: 'Invalid input',
        message: 'please enter a valid age(> 0)'});
            return;
        }
        props.onAddUser(userName, ageEntered);
        setUserName('');
        setAgeEntered('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='userName'>Username</label>
                <input type="text" id="userName"
                    value={userName} onChange={userNameChangeHandler} />
                <label htmlFor='userAge'>Age(Years)</label>
                <input type="number" id="userAge"
                    value={ageEntered} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )

}

export default AddUser;