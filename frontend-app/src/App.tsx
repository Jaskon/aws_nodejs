import React from 'react';
import logo from './logo.svg';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="text-center">
      <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-[40vmin] pointer-events-none animate-spin-slow" alt="logo" />
        <Chat />
      </div>
    </div>
  );
}

export default App;
