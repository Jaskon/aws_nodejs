import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css';
import { IChatMessages } from '../../../../model/Chat';
import { getMessages } from '../../api/core';
import { io } from 'socket.io-client';
import { BASE_URL } from '../../config';
import ChatSocket from './socket/socket-events';
import { Messages } from './Messages/Messages';
import { SendField } from './SendField/SendField';

const socket = io(BASE_URL, {
    autoConnect: false,
    transports: ['websocket'],
});
ChatSocket.initSocketEvents(socket);

function Chat() {
    const [messages, setMessages] = useState<IChatMessages[]>([]);

    useEffect(() => {
        getMessages().then(data => {
            setMessages(prevState => [...data, ...prevState]);
        });

        ChatSocket.updateMessagesFunction(setMessages);
        socket.connect();

        return () => {
            socket.disconnect();
            setMessages([]);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <Messages
                className={styles.messages}
                messages={messages}
            />


            <SendField
                onSend={(data: string) => ChatSocket.sendMessage(data)}
            />
        </div>
    );
}

export default Chat;
