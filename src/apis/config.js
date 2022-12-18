import axios from 'axios';

const baseUrl = 'https://safe-retreat-34308.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    // 暫時都通過
    config.headers[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMiIsIm5hbWUiOiJ1c2VyMiIsImVtYWlsIjoidXNlcjJAZXhhbXBsZS5jb20iLCJhdmF0YXIiOiJodHRwczovL2xvcmVtZmxpY2tyLmNvbS8xNDAvMTQwL3dvbWFuLG1hbi8_cmFuZG9tPTM0LjAxOTAxNjAyODMxNDYxIiwiY292ZXIiOiJodHRwczovL2kuaW1ndXIuY29tL3d2dTVLR3gucG5nIiwiaW50cm9kdWN0aW9uIjoiTW9sbGl0aWEgcmVydW0gZmFjaWxpcyBldCBkb2xvcmVtcXVlIHF1aWEgaXVyZS4iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjItMTItMTVUMTg6Mjg6MTYuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMTVUMTg6Mjg6MTYuMDAwWiIsImlhdCI6MTY3MTI2MjMzMywiZXhwIjoxNjczODU0MzMzfQ.ZcPSMfO7eWAf8dK8dIxJUBcOiI5JHtg1P9MDAkzSI70`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { baseUrl, axiosInstance };
