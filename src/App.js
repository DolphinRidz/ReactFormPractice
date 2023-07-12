import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const[userList, setUserList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return[...prevUserList, {name: uName, age: uAge, id: Math.random().toString()},];
    });
  }
  
  return (
    <div>
      {/* taking user data from AddUser component via State Up */}
      <AddUser onAddUser={addUserHandler}/>
      {/* The data is passed on to User list via state up i.e setUserList */}
      <UserList users={userList}/>
    </div>
  );
}

export default App;
