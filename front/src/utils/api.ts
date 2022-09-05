import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { ITasks } from '../interface/ITasks';
import { IUser } from '../interface/IUser';

const api = axios.create({
  baseURL: `https://desafio-motrix.herokuapp.com/`,
});

type GetToken = {
  token: string;
}

export const loginGetToken = async (endPoint: string, body: IUser): Promise<string> => {
  try {
    const token = await api.post(endPoint, body)
      .then((response) => response.data.token);

    return token;
  } catch (error) {
    return error.response.status;
  }
}

export const registerUser = async (endPoint: string, body: IUser): Promise<string> => {
  try {
    const data = await api.post(endPoint, body)
      .then((resp) => resp.data);

    return data.token;
  } catch (error) {
    return error.response.status;
  }
};

export const setTasks = async (endPoint: string, body: ITasks, token: string) => {
  try {
    api.defaults.headers.common['Authorization'] = token;
    const data = await api.post(endPoint, body);

    return data;
  } catch (error) {
    return error.response.status;
  }
}

export const getDatas = async (endPoint: string, token: string): Promise<IUser> => {
  api.defaults.headers.common['Authorization'] = token;
  const cartProduct = await api.get(endPoint)
    .then((resp) => resp.data);

  return cartProduct;
}

export default api;
