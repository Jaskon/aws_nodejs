import axios, { AxiosResponse } from 'axios';
import { User } from '../model/User';
import { BASE_URL } from '../config';

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get(BASE_URL + '/users');
};
