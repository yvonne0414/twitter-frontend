// import axios from 'axios';
import { baseUrl, axiosInstance } from './config';

export const getUserTop10 = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/?top=10`);
    return res.data.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
};
