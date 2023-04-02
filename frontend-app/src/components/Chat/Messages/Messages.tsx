import React from 'react';
import cls from 'classnames';
import { SystemMessage, UserMessage } from '../../../../../model/Chat';
import styles from './Messages.module.css';
import { isMyUsername } from '../socket/socket-events';

export function Messages(
    {messages, className}: {messages: Array<UserMessage | SystemMessage>, className: string},
) {
    return <div className={cls(className, styles.messagesWrapper)}>
        {
            messages.map((one) => {
                if (one.type === 'user') {
                    return (
                        <div className={cls(
                                styles.message,
                                {[styles.myMessage]: isMyUsername(one.user)}
                            )} key={one.id}>
                                {one.user}: {one.message}
                        </div>
                    );
                }

                if (one.type === 'system') {
                    return (
                        <div className={cls(
                            styles.systemMessage,
                        )} key={one.id}>
                            {one.message}
                        </div>
                    );
                }

                return (
                    <div className={cls(
                        styles.systemMessage,
                        styles.systemMessageError
                    )}>
                        Error. Message is not recognized.
                    </div>
                );
            })
        }
    </div>;
}
