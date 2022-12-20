import { baseUrl, axiosInstance } from './config';

export const login = async ({ account, password }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/users/login`, {
      account: account,
      password: password,
    });

    return res.data;
    
  } catch (error) {
    console.error('[Login Failed]: ', error);
    return error.response.data ;
  }
};

export const adminLogin = async ({ account, password }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/admin/users/login`, {
      account: account,
      password: password,
    });

    return res.data;
  } catch (error) {
    console.error('[Admin Login Failed]: ', error);
    return error.response.data;
  }
};

export const register = async ({ account, username, email, password, checkPassword }) => {
  try {
    const result = await axiosInstance.post(`${baseUrl}/users`, {
      account: account,
      name: username,
      email: email,
      password: password,
      checkPassword: checkPassword,
    });

    return result.data;
  } catch (error) {
    console.error('[Register Failed]: ', error);
    return error.response.data;
  }
};

// todo: change the api url
export const checkPermission = async (authToken) => {
  try {
    const response = await axiosInstance(`${baseUrl}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};
