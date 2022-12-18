import { baseUrl, axiosInstance } from './config';

export const addFollow = async (userInfo) => {
  const { id } = userInfo;

  try {
    const res = await axiosInstance.post(`${baseUrl}/followships`, {
      id,
    });
    return res.data;
  } catch (error) {
    console.error('[Create followship failed]: ', error);
  }
};

export const deleteFollow = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/followships/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete followship failed]:', error);
  }
};
