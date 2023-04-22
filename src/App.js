import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: username, age: age, id: Math.random().toString() }
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
