import React from 'react';
import cls from 'classnames';
import { Message } from '../../../model/Chat';
import styles from '../Chat.module.css';

function userIsMe(user: string) {
    return user === 'me';
}

export function RenderMessages(messages: Array<Message>) {
    return messages.map((one: Message) =>
        <div className={cls(
            styles.message,
            {[styles.myMessage]: userIsMe(one.user)}
        )} key={one.id}>
            {one.user}: {one.message}
        </div>
    );
}
