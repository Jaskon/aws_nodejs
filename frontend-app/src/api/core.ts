import axios, { AxiosResponse } from 'axios';
import { User } from '../../../model/User';
import { UserMessage } from '../../../model/Chat';
import uiAppConfig from '../ui-app-config';

export const getUsers = (): Promise<AxiosResponse<Array<User>>> => {
    return axios.get(uiAppConfig.BASE_URL + '/users');
};

export const getMessages = (): Promise<Array<UserMessage>> => {
    return axios.get(uiAppConfig.BASE_URL + '/messages').then(res => res.data);
}

export const getMyProfile = (): Promise<any> => {
    return axios.get(uiAppConfig.BASE_URL + '/my-profile');
}
