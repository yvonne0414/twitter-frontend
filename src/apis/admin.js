import { baseUrl, axiosInstance } from './config';

export const getAdminPostlist = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get AdminPostList failed]: ', error);
    throw error.response.data;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/admin/tweets/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete Post failed]: ', error);
    return error.response.data;
  }
};

export const getAdminUsersList = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/users`);
    return res.data;
  } catch (error) {
    console.error('[Get AdminPostList failed]: ', error);
    throw error.response.data;
  }
};
