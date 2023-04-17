export interface UserMessage {
    type: 'user',
    id: string,
    user: string,
    message: string,
}

export interface UserJoined {
    type: 'user-joined',
    user: string,
}

export interface UserDisconnected {
    type: 'user-disconnected',
    user: string,
}

export interface SystemMessage {
    type: 'system',
    id: string,
    message: string,
}

export interface MyUsername {
    name: string,
}

export type IChatMessages = UserMessage | SystemMessage | UserJoined | UserDisconnected;
