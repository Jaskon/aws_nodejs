import axios, { AxiosResponse } from 'axios';
import { User } from '../model/User';
import { BASE_URL } from '../config';
import { Message } from '../model/Chat';

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get(BASE_URL + '/users');
};

export const getMessages = (): Promise<Array<Message>> => {
    return axios.get(BASE_URL + '/messages').then(res => res.data);
}
