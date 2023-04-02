import React from 'react';
import { Socket } from 'socket.io-client';
import { UserMessage, SystemMessage, MyUsername } from '../../../../../model/Chat';

let setMessages: React.Dispatch<React.SetStateAction<(UserMessage | SystemMessage)[]>>;
let myUserName: string;
let socket: Socket;

export const initSocketEvents = (_socket: Socket) => {
    socket = _socket;

    socket.on('message', (message: UserMessage) => {
        setMessages((prevState) => [...prevState, { ...message, type: 'user' }]);
    });

    socket.on('system-message', (message: SystemMessage) => {
        setMessages((prevState) => [...prevState, { ...message, type: 'system' }]);
    });

    socket.on('my-username', (data: MyUsername) => {
        updateMyUsername(data.name);
    });
}


// TODO: May be move this into sibling file?

export const updateMessagesFunction = (_setMessages: React.Dispatch<React.SetStateAction<(UserMessage | SystemMessage)[]>>) => {
    setMessages = _setMessages;
}

export const updateMyUsername = (name: string) => {
    myUserName = name;
}

export const isMyUsername = (name: string) => {
    return myUserName === name;
}

export const sendMessage = (message: string) => {
    if (message.trim() === '') {
        return;
    }

    socket.emit('message', { message: message });
}


export default {
    initSocketEvents,
    updateMessagesFunction,
    sendMessage,
}
