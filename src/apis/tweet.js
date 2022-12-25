import { baseUrl, axiosInstance } from './config';

export const getPostlist = async ({ page, limit }) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error('[Get PostList failed]: ', error);
    throw error.response.data.message;
  }
};

export const getPost = async (postId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${postId}`);
    return res.data;
  } catch (error) {
    console.error('[Get Post failed]:', error);
    throw error.response.data.message;
  }
};

export const addPost = async (description) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets`, {
      description,
    });
    return res.data;
  } catch (error) {
    console.error('[Create Post failed]:', error);
    throw error.response.data.message;
  }
};

export const getReplies = async (postId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${postId}/replies`);
    return res.data;
  } catch (error) {
    console.error('[Get Replies failed]:', error);
    throw error.response.data.message;
  }
};

export const addReplies = async (postId, comment) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${postId}/replies`, {
      comment,
    });
    return res.data.data;
  } catch (error) {
    console.error('[Create Replies failed]:', error);
    throw error.response.data.message;
  }
};

export const addLike = async (postId) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${postId}/like`);
    return res.data;
  } catch (error) {
    console.error('[Create Like failed]:', error);
    throw error.response.data.message;
  }
};

export const addUnlike = async (postId) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${postId}/unlike`);
    return res.data;
  } catch (error) {
    console.error('[Create Unlike failed]:', error);
    throw error.response.data.message;
  }
};
