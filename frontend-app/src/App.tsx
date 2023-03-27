import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Chat from './components/chat/Chat';
import Users from './components/users/Users';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="logo" />

        <Users />
        <Chat />
      </div>
    </div>
  );
}

export default App;
