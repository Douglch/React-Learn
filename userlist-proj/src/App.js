import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserListHandler = (uName, uAge) => {
    setUsersList((previousList) => {
      return [...previousList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
