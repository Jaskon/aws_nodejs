import React from 'react';
import logo from './logo.svg';
import Chat from './components/Chat/Chat';
import { getMyProfile } from './api/core';
import uiAppConfig, { ENV } from './ui-app-config';
import axios from 'axios';

const logInWithGithub = () => {
    if (uiAppConfig.ENV === ENV.prod) {
        window.location.href = '/auth/github';
    } else {
        axios.get('http://localhost:3000/auth/github', { withCredentials: true })
            .then(response => console.log(response));
    }
}

function App() {

    // TODO: Remove
    getMyProfile().then(data => console.log(data));

    return (
        <div className="text-center">
            <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white">
                <img src={logo} className="h-[40vmin] pointer-events-none animate-spin-slow" alt="logo" />
                <Chat />
                <button
                    className="border border-white rounded-md pl-2 pr-2"
                    onClick={() => logInWithGithub()}
                >
                    Login with Github
                </button>
            </div>
        </div>
    );
}

export default App;
