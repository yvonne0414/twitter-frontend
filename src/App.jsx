import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostListPage, LoginPage, SignUpPage, AdminLoginPage } from './pages';
import { NotifyContextProvider } from './contexts/NotifyContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/regist" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="*" element={<PostListPage />} />
          </Routes>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;
