// When changing any socket.io event - change the 'readme.md' in this folder!

import { v4 as uuid } from 'uuid';

const isMessageValid = (message) => {
    if (message.trim() === '') {
        return false;
    }
    return true;
}

export const onSocketConnect = (socket, io) => {
    const userName = uuid().slice(-5);

    socket.emit('my-username', { name: userName });

    // io.emit('system-message', { id: uuid(), message: `User ${userName} joined!` });
    io.emit('user-joined', { id: uuid(), user: userName });

    socket.on('message', (data) => {
        if (!isMessageValid(data.message)) {
            return;
        }

        io.emit('message', { id: uuid(), user: userName, message: data.message });
    });

    socket.on('disconnect', (reason) => {
        io.emit('user-disconnected', { id: uuid(), user: userName });
    });
}
