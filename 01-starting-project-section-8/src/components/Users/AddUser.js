import React from 'react';

const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" text="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" text="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;