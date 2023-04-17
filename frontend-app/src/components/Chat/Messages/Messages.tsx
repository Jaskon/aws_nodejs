import React from 'react';
import cls from 'classnames';
import { IChatMessages } from '../../../../../model/Chat';
import styles from './Messages.module.scss';
import { isMyUsername } from '../socket/socket-events';

export function Messages(
    {messages, className}: {messages: Array<IChatMessages>, className: string},
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

                if (one.type === 'user-joined') {
                    return (
                        <div className={cls(
                            styles.message,
                            styles.systemMessage
                        )}>
                            User <span className={styles.userName}>{one.user}</span> joined!
                        </div>
                    );
                }

                if (one.type === 'user-disconnected') {
                    return (
                        <div className={cls(
                            styles.message,
                            styles.systemMessage
                        )}>
                            User <span className={styles.userName}>{one.user}</span> disconnected.
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
