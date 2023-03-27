import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { getUsers } from './api/core';
import { User } from './model/User';
import Chat from './components/chat/Chat';

function App() {
  const [ users, setUsers ] = useState<Array<User>>([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="logo" />

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

        <Chat />
      </div>
    </div>
  );
}

export default App;
