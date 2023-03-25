import axios, { AxiosResponse } from 'axios';
import { User } from '../model/User';

const BASE_URL = 'http://localhost:3000';
// const BASE_URL = '';

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get(BASE_URL + '/users');
};
