import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { PostList } from './pages';
import SignUpPage from './pages/SignUpPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <div className="wraper">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PostList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regist" element={<SignUpPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
