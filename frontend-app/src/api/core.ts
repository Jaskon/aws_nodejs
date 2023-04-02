import axios, { AxiosResponse } from 'axios';
import { User } from '../../../model/User';
import { BASE_URL } from '../config';
import { UserMessage } from '../../../model/Chat';

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get(BASE_URL + '/users');
};

export const getMessages = (): Promise<Array<UserMessage>> => {
    return axios.get(BASE_URL + '/messages').then(res => res.data);
}
