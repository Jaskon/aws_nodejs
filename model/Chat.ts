export interface UserMessage {
    type: 'user',
    id: string,
    user: string,
    message: string,
}

export interface SystemMessage {
    type: 'system',
    id: string,
    message: string,
}

export interface MyUsername {
    name: string,
}
