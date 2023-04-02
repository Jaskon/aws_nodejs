import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="logo" />

        <Chat />
      </div>
    </div>
  );
}

export default App;
