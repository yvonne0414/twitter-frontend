import { baseUrl, axiosInstance } from './config';

/**
 * 取得推薦追蹤
 */
export const getUserTop10 = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/?top=10`);
    return res.data.data;
  } catch (error) {
    console.error('[Get PopularUser failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得全部User
 */
export const getAllUser = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users`);
    return res.data.data;
  } catch (error) {
    console.error('[Get AllUsers failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一User
 */
export const getUser = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error('[Get User failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一使用者的所有推文
 */
export const getUserTweets = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get User tweets failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一使用者的所有回覆的推文
 */
export const getUserReplys = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/replied_tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get User replied_tweets failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一使用者點過的所有like
 */
export const getUserLikes = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/likes`);
    return res.data;
  } catch (error) {
    console.error('[Get User likes failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一使用者跟隨中的所有人
 */
export const getUserfollowings = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/followings`);
    return res.data;
  } catch (error) {
    console.error('[Get Followings failed]: ', error);
    throw error.response.data.message;
  }
};

/**
 * 取得單一使用者的所有跟隨者
 */
export const getUserfollowers = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/followers`);
    return res.data;
  } catch (error) {
    console.error('[Get Followers failed]: ', error);
    throw error.response.data.message;
  }
};
