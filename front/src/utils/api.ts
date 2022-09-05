import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { ITasks } from '../interface/ITasks'
import { IUser } from '../interface/IUser'
import { IBodyByDate } from './interface/IBodyByDate'
import { IArrIdDelete } from './interface/IArrIdDelete'

// const api = axios.create({
//   baseURL: `https://desafio-motrix.herokuapp.com/`,
// });

const api = axios.create({
  baseURL: `http://localhost:3005`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
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

export const getSortByDate = async (endPoint: string, body: IBodyByDate, token: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    data: body,
  };
  const data = await api.post(endPoint, config)
    .then((resp) => resp.data);

  return data;
}

export const delteTasks = async (endPoint: string, body: IArrIdDelete, token: string) => {
  const config: AxiosRequestConfig = {
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
    },
    data: body,
  }
  try {
    const data = await api.delete(endPoint, config);

    return data;
  } catch (error) {
    return error.response.status;
  }
}

export default api;
