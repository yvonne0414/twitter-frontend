import { login, register, checkPermission } from '../apis/auth';
import { createContext, useState, useEffect } from 'react';
// import * as jwt from 'jsonwebtoken';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null)
  
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setIsAuthenticated(false);
        return;
      }
      const result = await checkPermission(authToken);
      if (result) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: user,
        register: async (data) => {
          const result = await register({
            account: data.account,
            username: data.username,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword
          });
          if (result.status === 'success') {
            setIsAuthenticated(true);
            setUser({
              id: result.data.id,
              account: result.data.account,
              name: result.data.email,
              updatedAt: result.data.updatedAt,
              createdAt: result.data.createdAt
            });
          }
          return result;
        },
        login: async (data) => {
          const res = await login({
            account: data.account,
            password: data.password,
          });
          console.log(res)

          if (res.status == 'success') {
            setIsAuthenticated(true);
            setUser(res.data.user)
            localStorage.setItem('authToken', res.data.token);
          } 
          return res;
        },
        logout: () => {
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
