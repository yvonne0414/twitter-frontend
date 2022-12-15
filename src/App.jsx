import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { PostList } from './pages';
import SignUpPage from './pages/SignUpPage';
import AdminLoginPage from './pages/AdminLoginPage';

import { NotifyContextProvider } from './contexts/NotifyContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PostList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/regist" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
          </Routes>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;
