import React from 'react';
import cls from 'classnames';
import { IChatMessages } from '../../../../../model/Chat';
import { isMyUsername } from '../socket/socket-events';

export function Messages(
    {messages, className}: {messages: Array<IChatMessages>, className: string},
) {
    return <div className={cls(className, "flex flex-col")}>
        {
            messages.map((one) => {
                if (one.type === 'user') {
                    return (
                        <div className={cls(
                                "max-w-[25rem]",
                                {"text-end": isMyUsername(one.user)}
                            )} key={one.id}>
                                {one.user}: {one.message}
                        </div>
                    );
                }

                if (one.type === 'user-joined') {
                    return (
                        <div className="text-center text-green-500 max-w-[25rem]">
                            User <span className="text-green-700">{one.user}</span> joined!
                        </div>
                    );
                }

                if (one.type === 'user-disconnected') {
                    return (
                        <div className="text-center text-green-500 max-w-[25rem]">
                            User <span className="text-green-700">{one.user}</span> disconnected.
                        </div>
                    );
                }

                if (one.type === 'system') {
                    return (
                        <div className="text-center text-green-500" key={one.id}>
                            {one.message}
                        </div>
                    );
                }

                return (
                    <div className="text-center text-red-900">
                        Error. Message is not recognized.
                    </div>
                );
            })
        }
    </div>;
}
