import Axios, { AxiosResponse } from 'axios';
import { User } from '../../../model/User';
import { UserMessage } from '../../../model/Chat';
import uiAppConfig, { ENV } from '../ui-app-config';

const axios = Axios.create({
    baseURL: uiAppConfig.BASE_URL,
    withCredentials: uiAppConfig.ENV === ENV.prod ? Axios.defaults.withCredentials : true,
});

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get('/users');
};

export const getMessages = (): Promise<Array<UserMessage>> => {
    return axios.get('/messages').then(res => res.data);
}

export const getMyProfile = (): Promise<any> => {
    return axios.get('/my-profile');
}
