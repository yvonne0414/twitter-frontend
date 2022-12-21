import { baseUrl, axiosInstance } from './config';

export const getAdminPostlist = async ({ page, limit }) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/tweets?page=${page}&limit=${limit}`);
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

export const getAdminUsersList = async ({ page, limit }) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/users?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error('[Get AdminPostList failed]: ', error);
    throw error.response.data;
  }
};
