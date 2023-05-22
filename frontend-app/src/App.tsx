import React from 'react';
import logo from './logo.svg';
import Chat from './components/Chat/Chat';
import { getMyProfile } from './api/core';
import uiAppConfig, { ENV } from './ui-app-config';
import axios from 'axios';
import Button from "./components/common/Button";

const logInWithGithub = () => {
    if (uiAppConfig.ENV === ENV.prod) {
        window.location.href = '/auth/github';
    } else {
        axios.get('http://localhost:3000/auth/github', { withCredentials: true })
            .then(response => console.debug('[dev] Tried to log in', response.data));
    }
}

const logOut = () => {
    if (uiAppConfig.ENV === ENV.prod) {
        window.location.href = '/auth/logout';
    } else {
        axios.get('http://localhost:3000/auth/logout', { withCredentials: true })
            .then(response => console.debug('[dev] Log out', response.data));
    }
}

function App() {

    // TODO: Remove
    getMyProfile().then(response => console.log(response.data));

    return (
        <div className="text-center">
            <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white">
                <img src={logo} className="h-[40vmin] pointer-events-none animate-spin-slow" alt="logo" />
                <Chat />
                <Button onClick={() => logInWithGithub()}>
                    Login with Github
                </Button>
                <Button onClick={() => logOut()}>
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default App;
