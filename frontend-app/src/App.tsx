import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './api/core';
import { User } from './model/User';

function App() {
  const [ users, setUsers ] = useState<Array<User>>([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Users list (async):
        </div>
        <div className={'m-bt-2'}>
          { Object.values(users).map((user) =>
            <div key={user.id}>
              { user.name } { user.surname }
            </div>
          ) }
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
