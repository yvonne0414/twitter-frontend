import { login, register, checkPermission, adminLogin } from '../apis/auth';
import { createContext, useState, useEffect } from 'react';
// import * as jwt from 'jsonwebtoken';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
  adminLogin: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const role = localStorage.getItem('role');

    console.log(`isAuthenticated(${authToken !== null}, role(${role})))`);

    if (authToken === null) {
      if (pathname !== '/login' && pathname !== '/regist' && pathname !== '/admin/login') {
        navigate('/login');
      }
      return;
    }

    if (role === 'admin') {
      if (pathname === '/login' || pathname === '/regist' || pathname === '/admin/login') {
        navigate('/admin/tweets');
      } else if (!pathname.includes('admin')) {
        navigate('admin/tweets ');
      }
      return;
    } else {
      if (pathname === '/login' || pathname === '/regist' || pathname.includes('admin')) {
        navigate('/main');
      }
      return;
    }
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: localStorage.getItem('authToken') != null,
        currentMember: user,
        register: async (data) => {
          const result = await register({
            account: data.account,
            username: data.username,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword,
          });
          if (result.status === 'success') {
            localStorage.setItem('role', result.data.role);
            setUser({
              id: result.data.id,
              account: result.data.account,
              name: result.data.name,
              email: result.data.email,
              updatedAt: result.data.updatedAt,
              createdAt: result.data.createdAt,
              avatar: null,
              cover: null,
              introduction: null,
              role: result.data.role,
            });
          }
          return result;
        },
        login: async (data) => {
          const res = await login({
            account: data.account,
            password: data.password,
          });
          console.log(res);

          if (res.status == 'success') {
            setUser(res.data.user);
            localStorage.setItem('role', res.data.user.role);
            localStorage.setItem('authToken', res.data.token);
          }
          return res;
        },
        adminLogin: async (data) => {
          const res = await adminLogin({
            account: data.account,
            password: data.password,
          });

          if (res.status == 'success') {
            setUser(res.data.user);
            localStorage.setItem('role', res.data.user.role);
            localStorage.setItem('authToken', res.data.token);
          }
          return res;
        },
        logout: () => {
          localStorage.removeItem('authToken');
          localStorage.removeItem('role');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
