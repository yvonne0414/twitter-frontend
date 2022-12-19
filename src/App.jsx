import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostListPage, LoginPage, SignUpPage, AdminLoginPage, PostDetailPage } from './pages';
import { NotifyContextProvider } from './contexts/NotifyContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="*" element={<PostListPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/regist" element={<SignUpPage />} />
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/post/:postId" exact element={<PostDetailPage />}></Route>
              <Route path="/post/:id" element={<PostDetailPage />} />
              <Route path="/main" element={<PostListPage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;
