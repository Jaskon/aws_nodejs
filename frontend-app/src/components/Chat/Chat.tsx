import React, { useEffect, useState } from 'react';
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
        <div className="
                border border-solid rounded-2xl border-black
                p-8 flex flex-col text-[16pt]
                max-h-[100rem] max-w-[30rem] w-full
        ">
            <Messages
                className="mb-4"
                messages={messages}
            />


            <SendField onSend={(data: string) => ChatSocket.sendMessage(data)} />
        </div>
    );
}

export default Chat;
