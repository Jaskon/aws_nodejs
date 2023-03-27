import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css';
import { Message } from '../../model/Chat';
import { RenderMessages } from './render/messages';
import { getMessages } from '../../api/core';

function Chat() {
    const [messages, setMessages] = useState<Array<Message>>([]);

    useEffect(() => {
        getMessages().then(data => setMessages(data));
    }, []);

    return (
        <div className={styles.wrapper}>
            {RenderMessages(messages)}
        </div>
    );
}

export default Chat;
